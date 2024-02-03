"use client";
import { useState } from "react";
import style from "@/components/SigninPage/SignIn.module.css";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./login-form";
import { Sign } from "crypto";
import SignupForm from "./sign-up.form";
import ForgotPasswordForm from "./forgot-password";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }

  function showSignUpHandler() {
    setShowSignUp(!showSignUp);
    setShowSignIn(!showSignIn);
  }

  function showSignInHandler() {
    setShowSignUp(!showSignUp);
    setShowSignIn(!showSignIn);
  }

  function ResetPassword() {
    setShowSignUp(false);
    setShowSignIn(false);
    setShowResetPassword(!showResetPassword);
  }

  function showSignInPage() {
    setShowSignIn(true);
    setShowResetPassword(!showResetPassword);
  }

  return (
    <>
      <div className={style.signInContainer}>
        {showSignIn && (
          <LoginForm
            ResetPassword={ResetPassword}
            showPasswordHandler={showPasswordHandler}
            showSignUpHandler={showSignUpHandler}
          />
        )}

        {showSignUp && (
          <SignupForm
            showPasswordHandler={showPasswordHandler}
            ResetPassword={ResetPassword}
            showSignInHandler={showSignInHandler}
          />
        )}
        {showResetPassword && (
          <ForgotPasswordForm
            ResetPassword={ResetPassword}
            showPasswordHandler={showPasswordHandler}
            showSignInPage={showSignInPage}
          />
        )}
      </div>
    </>
  );
};

export default Signin;
