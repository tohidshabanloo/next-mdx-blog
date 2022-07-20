import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footerText">
        <Link target="_blank" href="https://tohidsh.com" passHref>
          <h4 className="text1"> توحید شعبانلو</h4>
        </Link>
        <h4> تیر 1401</h4>
      </div>
    </footer>
  );
}
