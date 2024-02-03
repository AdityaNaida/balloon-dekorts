"use client";
import style from "@/components/SigninPage/SignIn.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
  showPasswordHandler: () => void;
  ResetPassword: () => void;
  showSignInPage: () => void;
};

const ForgotPasswordForm = ({
  ResetPassword,
  showPasswordHandler,
  showSignInPage,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.loginform}>
      <Image
        src="/login-side-image.avif"
        alt="login Image"
        height={50}
        width={50}
        unoptimized
        priority
      />
      <form action="" method="post">
        <h3>Reset Your Password</h3>
        <p>OTP will be sent to your registered email id and mobile number</p>
        <div className={style.login_input}>
          <label htmlFor="">
            Email <span className={style.redStar}>*</span>
          </label>
          <input type="email" required placeholder="Enter email address" />
        </div>
        <input type="submit" value="Send OTP" />
        <div>
          <p>Or Sign In With Password</p>
          <article onClick={showSignInPage}> Sign In With Password</article>
          <Link href="/">
            Google{" "}
            <Image
              src="/google-logo.webp"
              unoptimized
              height={30}
              width={30}
              alt="google logo image"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
