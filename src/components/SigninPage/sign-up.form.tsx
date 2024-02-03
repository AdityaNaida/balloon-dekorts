"use client";
import style from "@/components/SigninPage/SignIn.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Signup } from "@/axios/auth";
import api from "@/axios/instance";
import toast from "react-hot-toast";

type Props = {
  showPasswordHandler: () => void;
  ResetPassword: () => void;
  showSignInHandler: () => void;
};

const SignupForm = ({
  ResetPassword,
  showPasswordHandler,
  showSignInHandler,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("/sign-up", form)
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false);
        setForm({ name: "", email: "", password: "" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
      });
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
      <form action="" onSubmit={onSubmit} method="post">
        <h3>Sign Up</h3>
        <div className={style.login_input}>
          <label htmlFor="">
            Name <span className={style.redStar}>*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            placeholder="Enter Your Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className={style.login_input}>
          <label htmlFor="">
            Email <span className={style.redStar}>*</span>
          </label>
          <input
            type="email"
            value={form.email}
            required
            placeholder="Enter Your Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className={style.login_input}>
          <label htmlFor="">
            Password <span className={style.redStar}>*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter Your Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
          <Image
            src={showPassword ? "/icons/eye.svg" : "/icons/eye-slash.svg"}
            height={20}
            width={20}
            alt="eye image"
            unoptimized
            onClick={showPasswordHandler}
          />
        </div>
        <input
          disabled={loading}
          type="submit"
          value={loading ? "Loading..." : "Sign up"}
        />
        <p>
          Already have an account?{" "}
          <span onClick={showSignInHandler}>Sign In</span>
        </p>
        <div>
          <p>Or Sign Up With</p>
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

export default SignupForm;
