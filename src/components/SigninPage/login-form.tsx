"use client";
import style from "@/components/SigninPage/SignIn.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

type Props = {
  showPasswordHandler: () => void;
  ResetPassword: () => void;
  showSignUpHandler: () => void;
};

const LoginForm = ({
  ResetPassword,
  showPasswordHandler,
  showSignUpHandler,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "patidarchandresh2002@gmail.com",
    password: "patidar",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    console.log(res, "REsponce");
    if (res?.ok) {
      toast.success("Logged in successfully");
    } else {
      toast.error(res?.error || "Something went wrong");
    }
    setLoading(false);
  };
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
      <form action="" onSubmit={handleSubmit} method="post">
        <h3>Sign In</h3>
        <div className={style.login_input}>
          <label htmlFor="">
            Email <span className={style.redStar}>*</span>
          </label>
          <input
            type="email"
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            required
            placeholder="Enter Your Email"
          />
        </div>

        <div className={style.login_input}>
          <label htmlFor="">
            Password <span className={style.redStar}>*</span>
          </label>
          <input
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter Your Password"
          />
          <Image
            src={showPassword ? "/icons/eye.svg" : "/icons/eye-slash.svg"}
            height={20}
            width={20}
            alt="eye image"
            unoptimized
            onClick={setShowPassword.bind(null, !showPassword)}
          />
        </div>
        <input
          disabled={loading}
          type="submit"
          value={loading ? "Loading.." : "Login "}
        />
        <span onClick={ResetPassword}>Forgot Password?</span>
        <p>
          Do not have an account?{" "}
          <span onClick={showSignUpHandler}>Create an account</span>
        </p>
        <div>
          <p>Or Sign In With</p>
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

export default LoginForm;
