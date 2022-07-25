import React from "react";
import Link from "next/link";
import { navLinks } from "./navLinks";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h2>پادکستر</h2>
        </Link>
        <nav className="nav">
          {navLinks.map((link, index) => {
            return (
              <div className="every-nav" key={index}>
                <Link href={link.path}>
                  <div key={index}>{link.name}</div>
                </Link>
              </div>
            );
          })}
          <div className="switcher">
            <ColorModeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
