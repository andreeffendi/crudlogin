import React, {useState} from 'react'
import { Button, Image, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Register = () => { 
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const history=useHistory()
  
async function signUp () {
  let item = {name,phone,email,password}
  console.warn(item)

 let result = await fetch("https://reqres.in/api/register", {
    method:'POST',
    body:JSON.stringify(item),
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  })
  result = await result.json()
  localStorage.setItem("user-info", JSON.stringify(result))
  // history.push("/home")
}

  return (
    <div style={{ marginTop: "40px" }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <div className="form-group">
                <Image
                  src="assets/images/avatar.png"
                  className="icon-img"
                  alt="icon"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "12em",
                    marginBottom: "1.5em",
                  }}
                />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Button
                    variant="primary btn-block"
                    type="submit"
                    onClick={signUp}
                    style={{
                      background: "#22668A",
                      width: "100px",
                      height: "50px",
                    }}
                  >
                   <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Register</Link>  
                  </Button>
                  <div className="mt-3 ml-5">
                    <small>Sudah Punya akun ? </small>
                    <Link to="/">
                      {" "}
                      <small className="reset ml-2"> Login </small>{" "}
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
