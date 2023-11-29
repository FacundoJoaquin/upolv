"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Li from "@/ui/components/atoms/Li/Li";
import Image from "next/image";
import brand from "../../../public/brand.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navArray = [
  { name: "Inicio", href: "/" },
  { name: "Secciones", href: "/secciones" },
  { name: "Quienes somos", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
  { name: "Publicá tu obra", href: "/publica" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.container}>
      <Image priority={true} alt="Logo de un poema o la vida" src={brand} />
      <ul className={styles.ulWrapper}>
        {navArray.map(({ name, href }) => (
          <Li key={name}>
            <Link
              className={clsx(styles.link, {
                [styles.selected]: pathname === href,
              })}
              href={href}
            >
              {name}
            </Link>{" "}
          </Li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
