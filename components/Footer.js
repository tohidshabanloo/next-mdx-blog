import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      
      <div className="container">
        <Link target="_blank" href="https://tohidsh.com" passHref>
          <h3 className="footer"> Tohid Shabanloo {`- July 2022`}</h3>
        </Link>
      </div>
    </footer>
  );
}
