import React, { useState } from "react";
import clsx from "clsx";

import styles from "./navbar.module.css";
import ContentWrapper from "../../layouts/MainLayout";
import BurgerMenu from "../BurgerMenu";

const menu = [
  {
    id: 0,
    href: "/#home",
    label: "Home",
  },
  {
    id: 1,
    href: "/#about",
    label: "About Us",
  },
  {
    id: 2,
    href: "/#package",
    label: "Package",
  },
  {
    id: 3,
    href: "/#facilities",
    label: "Facilities",
  },
  {
    id: 4,
    href: "/#gallery",
    label: "Gallery",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSetMobileMenu = () => {
    setMobileMenu((val) => !val);
  };

  return (
    <ContentWrapper>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/images/logo/Logo.png" />
        </div>
        <div className={styles.menuContainer}>
          {menu.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className={styles.actionContainer}>
          <button className={clsx(styles.button, "btn-contained")}>
            Contact Us
          </button>
        </div>
        <BurgerMenu onClick={handleSetMobileMenu} />
        {mobileMenu ? (
          <div className={styles.mobileMenuContainer}>
            <div className={styles.close} onClick={handleSetMobileMenu}>
              <span>X</span>
            </div>
            <img className={styles.logo} src="/images/logo/Logo.png" />
            <div className={styles.mobileMenu}>
              {menu.map((item) => (
                <a key={item.id} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <button className={clsx(styles.button, "btn-contained")}>
              Contact Us
            </button>
          </div>
        ) : null}
      </div>
    </ContentWrapper>
  );
};

export default Navbar;
