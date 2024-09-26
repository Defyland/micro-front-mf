/* eslint-disable @next/next/no-img-element */
"use client";
import "tailwindcss/tailwind.css";
import { Style } from "./Footer.styles";

const Footer = () => {
  return (
    <footer className={Style.Footer}>
      <div className={Style.Container}>
        <img
          src={
            "https://github.com/user-attachments/assets/0fc46c96-ec07-414d-9a3c-ef1e595720f4"
          }
          className={Style.GreenLogo}
          alt="green logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
