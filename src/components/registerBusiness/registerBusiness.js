import React, { useState } from "react";
import "../registerBusiness/registerBusiness.css";
//dependencies
import Card from "@mui/material/Card";
import {
  Box,
  CardContent,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from "react-i18next";

export default function RegisterBusiness() {
  const [isRemember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setValidForm] = useState(false);
  const [country, setCounty] = useState("");
  const [business, setBusiness] = useState("");

  const { t } = useTranslation();

  const handleLoginChange = () => {
    if (email === "" || password === "") setValidForm(true);
    else setValidForm(false);
  };
  const countryList = [
    { label: "Israel", value: "israel" },
    { label: "Australia", value: "australia" },
    { label: "Brazil", value: "brazil" },
    { label: "Brazil", value: "brazil" },
    { label: "Brazil", value: "brazil" },
  ];

  const businessList = [
    // { label: 'Brazil', value: 'brazil' },
    { label: "businesstype134", value: "Businesstype1" },
    { label: "businesstype2", value: "Businesstype2" },
    { label: "businesstype34", value: "Businesstype3" },
  ];

  const handleCountryChange = (event) => {
    setCounty(event.target.value);
  };
  const handleBusinessListChange = (event) => {
    setBusiness(event.target.value);
  };

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "darwin");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dihifeicm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className='scrollTamplate'>
      <div className="registerHeading">
        <div className="registerHeading-title">{t("registerAsBusiness")}</div>
        <div className="registerHeading-text">
        {t("let'sSignUpFirstForEnterIntoSquareWebsite.UhSheUp!")}
        </div>
      </div>

      <Card variant="outlined" className="cardStyle ragiserForm">
        <CardContent>
          <div className="formRow">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={t("businessName")}
              value={email}
              className="inputStyle"
              onChangeText={(text) => setEmail(text)}
            />
          </div>

          <div className="formRow">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={t("firstName")}
              value={email}
              className="inputStyle"
              onChangeText={(text) => setEmail(text)}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              passwordRules="true"
              label={t("lastName")}
              theme={{
                colors: { primary: isValidForm ? "red" : "#1AABE3" },
                roundness: 50,
              }}
              value={password}
              className="inputStyle"
              onChangeText={(text) => setPassword(text)}
            />
          </div>

          <div className="formRow">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="+62"
              value={email}
              className="inputStyle inputStyle--small"
              onChangeText={(text) => setEmail(text)}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={t("phoneNumber")}
              value={email}
              className="inputStyle"
              onChangeText={(text) => setEmail(text)}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              className="inputStyle inputStyle-slect"
              onChange={handleCountryChange}
            >
              {countryList.map((item) => {
                return <MenuItem value={item.label}>{item.label}</MenuItem>;
              })}
            </Select>
          </div>
          <div className="formRow">
            {/* <div> */}
            {/* <h1>Upload Image</h1> */}

            <div className='selectFileImg'>
               <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                    {/* <span>Add Profile Image</span> */}
                </label>
               <input
                     name="file"
                     placeholder="Upload an image"
                     onChange={uploadImage}
                    id="icon-button-photo"
                    type="file"
                />
              </div>


            {/* {loading ? ( */}
            {/* <h3>Loading...</h3> */}
            {/* ) : ( */}
            {/* <img src={image} style={{ width: '100px' }} alt="addphoto" /> */}
            {/* )} */}
            {/* </div> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={business}
              label="Business Type"
              className="inputStyle inputStyle-slect"
              onChange={handleBusinessListChange}
            >
              {businessList.map((item) => {
                return <MenuItem value={item.label}>{item.label}</MenuItem>;
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
              onChangeText={(text) => setEmail(text)}
            />
          </div>

          <div className="formRow">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={t("password")}
              value={email}
              className="inputStyle"
              onChangeText={(text) => setEmail(text)}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label={t("confirmPassword")}
              value={email}
              className="inputStyle"
              onChangeText={(text) => setEmail(text)}
            />
          </div>

          <div className="formTextArea">
            <h2 className="formLabel">{t("tellUsAboutYourBusiness")}</h2>
            <div className="formRow">
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={t("helloMyBusiness")}
                // style={{ width: 300 }}
                // variant="outlined"
                className="about-you"
              />
            </div>
          </div>

          <div className="CheckLinkBlock">
            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
            <p>
            {t("iAgreeToSquares")} <a href="/"> {t("cookies")}</a>  {t("and")}{" "}
              <a href="/"> {t("privacyPolicy")}</a>
            </p>
          </div>

          <div classname="registerFormBtn">
            <Button
              onClick={() => console.log("call")}
              className="registerForm-loginBtn"
            >
              {t("confirm")}{" "}
            </Button>
            <Button
              onClick={() => console.log("call")}
              className="registerForm-GetStartedBtn"
            >
             {t("getStarted")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
