import React from "react";
import Styles from "../navigation/navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <p>Zonatenang.com</p>
      </div>
      <div className={Styles.navDekstop}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/self-help">Self-Help</Link>
          </li>
          <li>
            <Link href="/hobi-dan-minat">Hobi dan Minat</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Styles.navMobile}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/self-help">Self-Help</Link>
          </li>
          <li>
            <Link href="/hobi-dan-minat">Hobi dan Minat</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
