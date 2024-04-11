import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { BsDiscord, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <Logo title="Collyn" className="footer-title" />
      <div className="footer-socials-container">
        <Link
          href={"https://github.com/Collyngodlewski"}
          target="blank"
          className="footer-socials"
        >
          <BsGithub />
        </Link>
        {/* <Link
          href={"https://instagram.com/Collyngodlewski"}
          target="blank"
          className="footer-socials"
        >
          <BsInstagram />
        </Link> */}
        <Link
          href={"https://discordapp.com/users/206199530499080192"}
          target="blank"
          className="footer-socials"
        >
          <BsDiscord />
        </Link>
      </div>
      <p>
        {" "}
        &#9400; All rights reserved{" "}
        <Link
          href={"https://github.com/Collyngodlewski"}
          target="blank"
          className="footer-rights"
        >
          @Collyn
        </Link>
      </p>
    </div>
  );
}

export default Footer;
