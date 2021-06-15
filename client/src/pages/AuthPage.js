import React, { useState } from 'react'
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap"
import { authActions } from '../redux/actions'
import "../App.css";





function AuthPage() {

  const { user } = useSelector((state) => state);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onSignUp = (e) => {
    e.preventDefault()
    dispatch(authActions.register(email, password))

  }

  if (user.loading) return <h1>Registering.....</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  
  return (
    <div className="cover"> 

      <div className="landingForm ">
        <h1>Auth Page</h1>
        <Form>
          <Form.Group  className="form-group" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group  className="form-group" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group  className="form-group" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Password" />
          </Form.Group>
          <Button onClick={onSignUp} type="submit" variant="secondary" className="mt-3">
            Sign-in </Button>


        </Form>
      Don't have an account?
      <Link to="/register">

          <Button variant="primary" size="sm" className="m-1">
            Sign-up </Button>
        </Link>
      </div>
      </div>
  )
}

export { AuthPage };
