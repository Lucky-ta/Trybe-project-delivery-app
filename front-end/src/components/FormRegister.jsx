import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import register from '../service/registerApi';

export default function FormRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checkInputs, setCheckInputs] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const PASSWORDLENGTH = 6;
  const NAMELENGTH = 12;

  useEffect(() => {
    const regex = /^\S+@\S+\.\S+$/;
    const emailIsValid = regex.test(email);
    if (emailIsValid && password.length >= PASSWORDLENGTH && name.length >= NAMELENGTH) {
      setCheckInputs(false);
    } else {
      setCheckInputs(true);
    }
  }, [email, name, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postRequest = await register({ name, email, password });
    console.log(postRequest);
    if (postRequest.message) {
      setErrorMessage(postRequest.message);
    } else {
      return navigate('/customer/products');
    }

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu nome"
          onChange={ (e) => setName(e.target.value) }
          value={ name }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          data-testid="common_register__input-email"
          type="email"
          placeholder="Enter email"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          data-testid="common_register__input-password"
          type="password"
          placeholder="Password"
          onChange={ (e) => setPassword(e.target.value) }
          value={ password }
        />
      </Form.Group>

      <Button
        data-testid="common_register__button-register"
        variant="primary"
        type="submit"
        disabled={ checkInputs }
      >
        CADASTRAR
      </Button>
      {errorMessage.length !== 0 && (
        <p data-testid="common_register__element-invalid_register">{errorMessage}</p>
      )}
    </Form>
  );
}
