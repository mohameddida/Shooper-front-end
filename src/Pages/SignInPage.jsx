import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignInPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="container mt-5">
      <div className="w-50 mx-auto">
        <div className="text-center">
          <h1>Shooper</h1>
          <div className="d-flex justify-content-between mt-4 mb-2" style={{        fontFamily: 'Poppins, sans-serif' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Sign in</Form.Label>
          </Form.Group>         
           </div>
          </div>

      

      <div className="d-flex justify-content-between mt-2 mb-2">
      <Button variant="secondary" className="w-50 me-2 font-poppins" size="lg">
      Sign in with Google
          </Button>
          <Button variant="secondary" className="w-50 ms-2 font-poppins" size="lg">
            Sign in with Apple
          </Button>
        </div>
        <div className="d-flex justify-content-between mt-4 mb-2">
        <Button variant="secondary" className="w-50 me-2 font-poppins" size="lg">
        Sign in with Facebook
          </Button>
          <Button variant="secondary" className="w-50 ms-2 font-poppins" size="lg">
            Sign in with LinkedIn
          </Button>
        </div>



        <div className="text-center mt-4 mb-2">
          <span className=''> ----------------------------------- OR ---------------------------------- </span>
        </div>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required />
            <div className="mt-3">
            <p><a href="#" variant="dark" className="text-dark">Forgot password?</a></p>            </div>
          </Form.Group>

          <div className="text-center">
            <Button variant="dark" type="submit" className="w-100 mt-4">
              Sign In
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
        <a  href="/signup" className='text-decoration-none'> <h4  className="text-dark poppins-font">Create Account</h4>       </a>
          </div>
      </div>
    </div>
  );
};

export default SignInPage;
