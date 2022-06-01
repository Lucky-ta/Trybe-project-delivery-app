import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function FormLogin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          data-testid="common_login__input-email"
        />
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          data-testid="common_login__input-password"
        />
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </Button>
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </Button>
      </Form.Group>

    </Form>
  );
}
