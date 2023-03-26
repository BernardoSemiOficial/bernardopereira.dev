import { ReactNode } from "react";
import { button } from "./style.css";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={button}>{children}</button>;
};
