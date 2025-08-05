import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Login() {
  const [failedLogin, setFailedLogin ] = useState(false)
  const loginDetails = {
    username: "user123",
    password: "password"
  }

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value

    if (loginDetails.username === username && loginDetails.password === password) {
      return navigate("/success") // change this to be bad for first demonstration
    } else {
      setFailedLogin(true)
    }
  }

  return (
    <section className="loginBox">
      <h1 className='login-text'>Log in</h1>
      <Form className='form' onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="username" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
      <Form.Label htmlFor="inputPassword">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text className='text-danger'>
        {failedLogin ? `Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.` : ""}
      </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" id='login'>
          Submit
        </Button>
      </Form>
    </section>
  )
}

export default Login