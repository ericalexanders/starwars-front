'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const asPath = usePathname()

  console.log("Pathl", asPath)
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">May the Force be with you</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={ asPath === "/"}>
          <Link color="foreground" href="/">
            Personajes
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath === "/films"}>
          <Link href="#">
            Peliculas
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath === "/starships"}>
          <Link color="foreground" href="#">
            Naves
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath === "/planets"}>
          <Link color="foreground" href="#">
            Planetas
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
