/* eslint-disable @next/next/no-img-element */
"use client";

import "tailwindcss/tailwind.css";
import { Style } from "./Header.styles";
import { HeaderProps } from "../../../../global/entities";

const Header = ({ cartCount, changeCartState }: HeaderProps) => {
  return (
    <header className={Style.Header}>
      <div className={Style.Container}>
        <img
          src={
            "https://github.com/user-attachments/assets/04bfdec5-fbe2-4390-b10a-0815da1c5b0b"
          }
          className={Style.WhiteLogo}
          alt="white logo"
        />
        <button onClick={changeCartState} className={Style.ActionContainer}>
          <img
            src={
              "https://github.com/user-attachments/assets/1267c8bf-0248-4c49-8ab9-1dbbce965966"
            }
            className={Style.ActionsLogo}
            alt="actions logo"
          />
          <span className={Style.ActionCount}>{cartCount || 0}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
