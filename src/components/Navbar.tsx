'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const asPath = usePathname()
  return (
    <Navbar shouldHideOnScroll isBordered maxWidth="xl">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">May the Force be with you</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={ asPath == "/"}>
          <Link color={asPath == "/" ? '' : 'foreground'} href="/" aria-current="page">
            Personajes
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath == "/films"}>
          <Link color={asPath == "/films" ? '' : 'foreground'} href="/films" aria-current="page">
            Peliculas
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath == "/starships"}>
          <Link color={asPath == "/starships" ? '' : 'foreground'} href="/starships" aria-current="page">
            Naves
          </Link>
        </NavbarItem>
        <NavbarItem isActive={ asPath ==="/planets"}>
          <Link color={asPath == "/planets" ? '' : 'foreground'} href="/planets" aria-current="page">
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
