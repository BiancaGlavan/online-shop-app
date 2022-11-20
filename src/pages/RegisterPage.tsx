import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

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

const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--text-color);
  text-align: center;
`;


const ErrorMessage = styled.p`
  color: var(--highlight-color);
`;

const SuccesMessage = styled.p`
  color: #2e7d32;
`;

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [isSucces, setIsSucces] = useState(false);

  const isFormValid = () => {
    if (username === '') {
      setErrorMsg('Username is required');
      return false;
    } else if (email === '') {
      setErrorMsg('Email is required');
      return false;
    } else if (password === '') {
      setErrorMsg('Password is required');
      return false;
    } else {

    }
    return true;
  }

  const handleRegister = () => {

    const newUser = {
      email: email,
      name: username,
      password: password,
      role: "user",
      avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-cavalier-king-charles-spaniel-1583341713.jpg"
    }

    if (isFormValid()) {
      axios.post('https://api.escuelajs.co/api/v1/users/', newUser)
        .then((response) => {
          console.log('is success: ', response);
          setIsSucces(true);
        }, (error) => {
          console.log('is error:', error);
        });
    }

  }



  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Input value={username} type="text" placeholder="username" onChange={setUsername} />
        <Input onChange={setEmail} placeholder={'email'} type={'email'} label={'Email'} value={email} />
        <Input onChange={setPassword} placeholder={'password'} type={'password'} label={'Password'} value={password} />
        <ErrorMessage>{errorMsg}</ErrorMessage>
        <Button name='Create User' onClick={handleRegister} />
        {isSucces && <SuccesMessage>User was created!</SuccesMessage>}
      </Wrapper>
    </Container>
  )
}

export default RegisterPage;