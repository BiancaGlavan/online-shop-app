import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { updateToken, updateAuth, isAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = () => {
        const user = {
            email: email,
            password: password
        }
        axios.post('https://api.escuelajs.co/api/v1/auth/login', user, { headers: {} })
            .then((response) => {
                console.log('is success: ', response);

                updateToken(response.data.access_token);
                updateAuth(true);
                localStorage.setItem('token', response.data.access_token);
                navigate('/');

            }, (error) => {
                console.log('is error:', error);
            });
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/');
        }
    }, [isAuth])

    return (
        <Container>
            <Wrapper>
                <Input onChange={setEmail} placeholder={'email'} type={'email'} label={'Email'} value={email} />
                <Input onChange={setPassword} placeholder={'password'} type={'password'} label={'Password'} value={password} />
                <Button name="Login" onClick={handleLogin} />
            </Wrapper>
        </Container>
    )
}

export default LoginPage;