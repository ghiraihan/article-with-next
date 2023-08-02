import React, { useState } from "react";
import { Input, Label, Button, Alert } from "reactstrap";

// api
import { loginApi } from "../../api-lib/AuthApi";

function LoginPage() {
  const [hideAlert, setHideAlert] = useState(true);
  const [alertMessage, setAlertMessage] = useState('')
  const [payload, setPayload] = useState({
    username: '',
    password: ''
  });

  function handleChange(valueObj) {
    setPayload({ ...payload, ...valueObj })
  }

  function hitApi() {
    loginApi(payload)
      .then(async result => {
        // 1. status === 400, kasih alert, isi alertnya messagenya
        if(result.status === 400) {
          const data = await result.json()
          setAlertMessage(data.message);
          setHideAlert(false)
        } else {
          const data = await result.json()
          localStorage.setItem('token', data.token)
          window.location.replace('/article')
        }
      });
  }

  return (
    <div className="p-3">
      <h3>LOGIN PAGE</h3>
      <Alert color="danger" hidden={hideAlert}>
        {alertMessage}
      </Alert>
      <Label>Username:</Label>
      <Input 
        type="text" 
        value={payload.username} 
        placeholder="username"
        onChange={function(event) {
          handleChange({ username: event.target.value })
        }}
      />
      <Label>password:</Label>
      <Input 
        type="password" 
        value={payload.password} 
        placeholder="password"
        onChange={function(event) {
          handleChange({ password: event.target.value })
        }}
      />
      <br />
      <Button type="button" color="primary" onClick={hitApi}>Login</Button>
    </div>
  )
}

export default LoginPage;