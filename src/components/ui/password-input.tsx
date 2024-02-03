import * as React from "react";
import { Input } from "./input";
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative">
        <Input {...props} type={showPassword ? "text" : "password"} ref={ref} />
        <Image
          src={showPassword ? "/icons/eye.svg" : "/icons/eye-slash.svg"}
          height={20}
          width={20}
          alt="eye image"
          unoptimized
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput };
