import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import login from '../service/loginApi';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkInputs, setCheckInputs] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const MINLENGTH = 6;

  useEffect(() => {
    const regex = /^\S+@\S+\.\S+$/;
    const emailIsValid = regex.test(email);
    if (emailIsValid && password.length >= MINLENGTH) {
      setCheckInputs(false);
    } else {
      setCheckInputs(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const postRequest = await login({ email, password });
    if (postRequest.message) {
      setErrorMessage(postRequest.message);
    } else {
      const user = {
        name: postRequest.userData.name,
        email: postRequest.userData.email,
        role: postRequest.userData.role,
        token: postRequest.token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      return navigate('/customer/products');
    }
    console.log(postRequest);
    setEmail('');
    setPassword('');
    // todo
  };

  return (
    <Form onSubmit={ handleSubmit } className="loginCard">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          data-testid="common_login__input-email"
          onChange={ (e) => { setEmail(e.target.value); } }
          value={ email }
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          data-testid="common_login__input-password"
          onChange={ (e) => { setPassword(e.target.value); } }
          value={ password }
        />
        <Button
          variant="primary"
          className="mx-auto mt-2"
          type="submit"
          data-testid="common_login__button-login"
          disabled={ checkInputs }
        >
          Login
        </Button>
      </Form.Group>
      <Button
        variant="primary"
        className="mx-auto mt-2"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
      {errorMessage.length !== 0 && (
        <p data-testid="common_login__element-invalid-email">{errorMessage}</p>
      )}
    </Form>
  );
}
