import React, { useState } from 'react'
import '../register/register.css';
//dependencies
import Card from '@mui/material/Card';
import { Box, CardContent, MenuItem, Select, TextareaAutosize, TextField } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";

export default function Register() {
  
  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setValidForm] = useState(false);
  const [country, setCounty] = useState("");

  const { t } = useTranslation();

  const handleLoginChange = () => {
    if (email === "" || password === "")
      setValidForm(true)
    else
      setValidForm(false)

  }
  const countryList = [
    { label: 'Israel', value: 'israel' },
    { label: 'Australia', value: 'australia' },
    { label: 'Brazil', value: 'brazil' },

  ];

  const handleCountryChange = (event) => {
    setCounty(event.target.value);
  }
  return (
    <div className='scrollTamplate'>
      <div className='mainContent'>
        <div className='mainHeading'>
          <div className='mainTitle'>{t("register")}</div>
          <div className='mainText'>{t("let'sSignUpFirstForEnterIntoSquareWebsite.UhSheUp!")}</div>
        </div>

        <Card variant="outlined" className="cardStyle" >
          <CardContent>
            <div className='formRow'>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={t("firstName")}
                value={email}
                className="inputStyle"
                onChangeText={text => setEmail(text)}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                passwordRules="true"
                label={t("lastName")}
                theme={{ colors: { primary: isValidForm ? "red" : '#1AABE3' }, roundness: 50 }}
                value={password}
                className="inputStyle"
                onChangeText={text => setPassword(text)}
              />
            </div>

            <div className='formRow'>
              <TextField
            id="outlined-basic"
            variant="outlined"
            label="+62"
            value={email}
            className="inputStyle inputStyle--small"
            onChangeText={text => setEmail(text)}
          />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={t("phoneNumber")}
                value={email}
                className="inputStyle"
                onChangeText={text => setEmail(text)}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                className="inputStyle inputStyle-slect"
                onChange={handleCountryChange}
              >
                {countryList.map(item => {
                  return <MenuItem value={item.label}>{item.label}</MenuItem>
                })}
              </Select>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={t("mailAddress")}
                value={email}
                className="inputStyle"
                onChangeText={text => setEmail(text)}
              />
            </div>

            <div className='formRow'>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={t("password")}
                value={email}
                className="inputStyle"
                onChangeText={text => setEmail(text)}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={t("confirmPassword")}
                value={email}
                className="inputStyle"
                onChangeText={text => setEmail(text)}
              />
            </div>

            <div>
              <h2>{t("tellUsAboutYourself")} </h2> 
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={t("helloMyName")}
                // style={{ width: 300 }}
                // variant="outlined"
                className='about-you'
              />
            </div>

            <div className='CheckLinkBlock'>
              <FormControlLabel control={<Checkbox defaultChecked />} label="" />
              <p>{t("iAgreeToSquares")} <a href='/'>{t("cookies")}</a> {t("and")} <a href='/'>{t("privacyPolicy")}</a></p>
              </div>

            <div classname="btns">
              <Button onClick={() => console.log("call")} className="loginBtn">{t("login")}</Button>
              <Button onClick={() => console.log("call")} className="GetStartedBtn">{t("getStarted")}</Button>
            </div>
          </CardContent>
        </Card>


      </div>
    </div>
  )
}
