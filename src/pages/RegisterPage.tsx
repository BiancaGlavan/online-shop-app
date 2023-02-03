import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  .title {
    margin-bottom: 20px;
    color: var(--text-color);
    text-align: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }

  .error {
    color: var(--highlight-color);
  }

  .succes {
    color: #2e7d32;
  }
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
      role: "customer",
      avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-cavalier-king-charles-spaniel-1583341713.jpg"
    }

    if (isFormValid()) {
      axios.post('https://api.escuelajs.co/api/v1/users/', newUser)
        .then((response) => {
          console.log('is success: ', response);
          setIsSucces(true);
        }, (error) => {
          console.log('is error:', error);
          setErrorMsg('Something went wrong!')
        });
    }

  }



  return (
    <Container>
      <div className="wrapper">
        <h3 className="title">Register</h3>
        <Input value={username} type="text" label={'Username'} placeholder="username" onChange={setUsername} />
        <Input onChange={setEmail} placeholder={'email'} type={'email'} label={'Email'} value={email} />
        <Input onChange={setPassword} placeholder={'password'} type={'password'} label={'Password'} value={password} />
        
        <p className="error">{errorMsg}</p>
        <Button name='Create User' onClick={handleRegister} />
        {isSucces && <p className="succes">User was created!</p>}
      </div>
    </Container>
  )
}

export default RegisterPage;