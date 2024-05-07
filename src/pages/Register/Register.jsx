import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation before submission
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Simulate registration logic (replace with actual API call)
    console.log("Registering user:", { username, email, password });
    // Clear form fields after submission
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <Form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      <Form.Group className="mb-4" controlId="formBasicUsername">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                        <Form.Label>Repeat your password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="form-check d-flex justify-content-center mb-5">
                        <Form.Check className="me-2" type="checkbox" label="I agree all statements in Terms of service" />
                      </Form.Group>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button type="submit" variant="primary" size="lg">Register</Button>
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
