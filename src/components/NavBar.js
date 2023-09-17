import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Theme from './Theme';
import {SideBarIcon} from '../SVG/SideBarIcon';

export default function NavBar({ toggleTheme, isDarkMode, toggleSidebar }) {
  return (
    <Navbar position="static">
      <NavbarContent align="start">
        <Button
          variant="bordered"
          onClick={toggleSidebar}
          className="w-[24px] h-[24px] m-0 p-0"
          color="default"
        >
          <SideBarIcon size={24} />
        </Button>
        <NavbarBrand>
          <p className="font-bold text-inherit">3B-GPT</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Theme toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
