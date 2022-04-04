import React, { useState } from "react";
//component
import Header from "../../header/Header";
//css
import "../register/register.css";

//dependencies
import { Select, TextareaAutosize } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import {
  TextField,
  Checkbox,
  Button,
  Card,
  CardContent,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function RegisterB() {
  const [isagree, setIsagree] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isValidForm, setValidForm] = useState(false);
  const [country, setCounty] = useState("");
  const [showbutton, setShowbutton] = useState(false);
  const { t } = useTranslation();

  const countryList = [
    { label: "India", value: "india" },
    { label: "Australia", value: "australia" },
    { label: "Brazil", value: "brazil" },
  ];

  const handleCountryChange = (event) => {
    setCounty(event.target.value);
  };

  let history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    code: Yup.string().required("Code is required"),
    phonenumber: Yup.number()
      .required("Phonenumber is required")
      .integer("Phonenumber must integer"),
    // .matches(
    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //   "Phone number is not valid"
    // )
    select: Yup.string().required("you need to select one country"),
    cPassword: Yup.string().required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="mainContent">
        <div className="mainHeading">
          <div className="mainTitle">{t("register")}</div>
          <div className="mainText">{t("signup")}</div>
        </div>

        <Card variant="outlined" className="cardStyle">
          <CardContent>
            <div className="formRow">
              <TextField
                required
                id="firstname"
                className="inputStyle"
                name="firstname"
                label={t("firstname")}
                fullWidth
                margin="dense"
                {...register("firstname")}
                error={errors.firstname ? true : false}
                // style={Styles.inputStyle}
              />

              <TextField
                required
                id="lastname"
                className="inputStyle"
                name="lastname"
                label={t("lastname")}
                fullWidth
                margin="dense"
                {...register("lastname")}
                error={errors.lastname ? true : false}
                // style={Styles.inputStyle}
              />
            </div>

            <div className="formRow">
              <TextField
                required
                id="code"
                className="inputStyle inputStyle--small"
                name="code"
                label="+62"
                fullWidth
                margin="dense"
                {...register("code")}
                error={errors.code ? true : false}
                // style={Styles.inputStyle}
              />
              <TextField
                required
                id="phonenumber"
                className="inputStyle"
                name="phonenumber"
                label={t("phonenumber")}
                fullWidth
                margin="dense"
                {...register("phonenumber")}
                error={errors.phonenumber ? true : false}
                // style={Styles.inputStyle}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="select"
                value={country}
                label={t("country")}
                className="inputStyle inputStyle-slect"
                onChange={handleCountryChange}
                {...register("select")}
                error={errors.select ? true : false}
              >
                {countryList.map((item) => {
                  return <MenuItem value={item.label}>{item.label}</MenuItem>;
                })}
              </Select>
            </div>

            <div>
              <TextField
                required
                id="email"
                className="inputStyle"
                name="email"
                label={t("mail")}
                fullWidth
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
                // style={Styles.inputStyle}
              />
            </div>

            <div className="formRow">
              <TextField
                required
                id="password"
                className="inputStyle"
                name="password"
                label={t("password")}
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
                // style={Styles.inputStyle}
              />

              <TextField
                required
                id="cPassword"
                className="inputStyle"
                name="cPassword"
                label={t("confirmPassword")}
                fullWidth
                margin="dense"
                {...register("cPassword")}
                error={errors.cPassword ? true : false}
                // style={Styles.inputStyle}
              />
            </div>

            <div>
              <h6 className="inputLabel">{t("tell")}</h6>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={t("helloname")}
                className="textAreaBox"
              />
            </div>

            <div className="CheckLinkBlock">
              <FormControlLabel
                control={<Checkbox />}
                checked={isagree}
                onChange={(e) => setIsagree(e.target.checked)}
                onClick={() => setShowbutton(true)}
                label={t("iagree")}
              />
              {console.log("isagree", isagree)}
            </div>

            <div className="formButtons">
              {showbutton && isagree === true ? (
                <Button onClick={() => history.push("/login")} className="grayBtn">
                  {t("login")}
                </Button>
              ) : null}
              <Button onClick={handleSubmit(onSubmit)} className="blueBtn">
                {t("getStarted")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
