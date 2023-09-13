import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Theme from './Theme'

export default function NavBar({ toggleTheme ,isDarkMode  }) {
    return (
      <Navbar position="static">
        <NavbarBrand>
          <p className="font-bold text-inherit">3B-GPT</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Theme toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
