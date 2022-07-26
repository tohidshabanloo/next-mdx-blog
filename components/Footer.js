import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footerText">
        <h4> بازنشر فقط با ذكر لينك مجاز است.</h4>
        <Link target="_blank" href="https://tohidsh.com" passHref>
          <h4 className="text1"> توحید شعبانلو</h4>
        </Link>
      </div>
    </footer>
  );
}
