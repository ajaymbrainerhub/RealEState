import React, { Fragment } from "react";
//dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
//component
import Header from "../../../header/Header";
//css
import "../../login/login/login.css";

const LoginB = () => {
  let history = useHistory();
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
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
    <Fragment>
      <Header />
      <div className="mainContent">
        <div className="mainHeading">
          <div className="mainTitle">Sign In</div>
          <div className="mainText">
            Just sign in if you have an acoount in here. Enjoy our Website
          </div>
        </div>
        <Card variant="outlined" className="cardStyle">
          <CardContent>
            <TextField
              required
              id="email"
              className="inputStyle"
              name="email"
              label={t("email")}
              fullWidth
              margin="dense"
              {...register("email")}
              error={errors.email ? true : false}
              // style={Styles.inputStyle}
            />
            <TextField
              required
              id="password"
              name="password"
              label={t("password")}
              type="password"
              className="inputStyle"
              fullWidth
              margin="dense"
              {...register("password")}
              error={errors.password ? true : false}
            />
            <div className="CheckLinkBlock">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={t("rememberMe")}
              />
              <Button
                onClick={() => console.log("call")}
                className="forgotLink"
              >
                {t("forgotPassword")}
              </Button>
            </div>
            <div className="formBtn">
              <Button onClick={handleSubmit(onSubmit)} className="blueBtn">
                {t("login")}
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card style={{ marginTop: 20, boxShadow: "none" }}>
          <CardContent
            onClick={() => {
              history.push("/registers");
            }}
            className="bottomLinks"
          >
            {t("alreadyaccount")}
          </CardContent>
        </Card>
      </div>
    </Fragment>
    </div>
  );
};

export default LoginB;
