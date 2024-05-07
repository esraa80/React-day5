import React from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Form>
      {/* Email input */}
      <Form.Group controlId="formBasicEmail" className="mb-4">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      {/* Password input */}
      <Form.Group controlId="formBasicPassword" className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {/* Remember me checkbox and Forgot password link */}
      <div className="d-flex justify-content-between mb-4">
        <Form.Check type="checkbox" label="Remember me" checked />
        <a href="#!" className="text-decoration-none">
          Forgot password?
        </a>
      </div>

      {/* Sign in button */}
      <Button variant="primary" type="submit" className="btn-block mb-4">
        Sign in
      </Button>

      {/* Register and social login buttons */}
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <Button variant="link" className="btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <i className="fab fa-google"></i>
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <i className="fab fa-github"></i>
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
