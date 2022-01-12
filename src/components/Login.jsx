import React, { useState, useEffect }from 'react'
import {useHistory} from "react-router-dom"
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      // history.push("/home")
    }
  },)

  async function login () {
    console.warn("data", email,password)
    let item={email,password}
    let result = await fetch('https://reqres.in/api/login/1', {
      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(item) 
    })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    // history.push("/home")
  }

  return (
    <div>
       <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} s={12} className="text-center">
              <Image
                src="assets/images/avatar.png"
                className="icon-img"
                alt="icon"
                style={{
                  width: "80px",
                  height: "80px",
                  marginBottom: "1.5rem",
                }}
              />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Group>
                <Button
                  variant="primary btn-block"
                  type="submit"
                  onClick={login}
                  style={{
                    background: "#22668A",
                    width: "358px",
                    height: "50px",
                  }}
                >
                  <Link to="/home" style={{color: 'white', textDecoration: 'none'}} > Login
                </Link> </Button>
                <div className="mt-3 ml-5">
                  <small>Tidak Punya akun ? </small>
                  <Link to="/register">
                    {" "}
                    <small className="reset ml-2"> Register </small>{" "}
                  </Link>
                </div>
              </Form>
            </Col>

            <Col lg={8} md={6} s={12}>
              <Image src="assets/images/login.png" className="w-100" />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Login
