import React, { useState } from 'react'
// import Header from '../header/Header'
import '../login/login.css'

//dependencies
import Card from '@mui/material/Card';
import { Box , CardContent } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { useTranslation } from "react-i18next";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

export default function Login() {

  // const navigate = useNavigate()
  const { t } = useTranslation();
  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setValidForm] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  /**
     * Handle login click
     */
  const handleLoginClick = (event) => {
    event.preventDefault();
    if (validate()) {
    }
    // if (email === "" || password === "")
    //   setValidForm(true)
    // else {
    //   setValidForm(false)
    //   alert("success")
    // }
  }

  const validate = () => {
    let input = formInput;
    let errors = {};
    let isValid = true;
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your username.";
    }
    setError(errors)
    return isValid;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormInput(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='scrollTamplate'>
      {/* <Header /> */}
      <div className='mainContent'>
        <div className='mainHeading'>
          <div className='mainTitle'>{t("signIn")}</div>
          <div className='mainText'>{t("JustSignInIfYouHaveAnAcoountInHere")}</div>
        </div>

        <Card variant="outlined" className="cardStyle" >
          <CardContent>
            {console.log("error.username", error.username)}
            <div>
              <TextField
                name='email'
                id="outlined-basic"
                variant="outlined"
                label={t("yourEmail/Username")}

                value={formInput.email}
                error={error.username}
                className="inputStyle"
                onChange={(e) => {
                  handleInputChange(e)
                  // setValidForm(false)
                  // setEmail(e.target.value)

                }} />
            </div>
            <div>
              <TextField
                name='password'
                type="password"
                id="outlined-basic"
                variant="outlined"
                error={isValidForm}
                label={t("password")}
                value={formInput.password}
                className="inputStyle"
                onChange={(e) => {
                  handleInputChange(e)
                  // setValidForm(false)
                  // setPassword(e.target.value)
                }}
              />
            </div>
            <div className='CheckLinkBlock'>
              <FormControlLabel control={<Checkbox defaultChecked />} label={t("rememberMe")}/>
              <Button onClick={() => console.log("call")} className='forgotLink'>{t("forgotPasswrod")}</Button>
            </div>
            <div className='formBtn'>
              <Button onClick={(e) => handleLoginClick(e)} className="blueBtn">{t("login")}</Button>
            </div>
          </CardContent>
        </Card>

        <Card style={{ marginTop: 20, boxShadow: 'none' }}>
          {/* <CardContent onClick={() => { navigate('/register') }} className='bottomLinks'>Already have an Square account? Log in</CardContent> */}
        </Card>
      </div>
    </div>
  )
}
