import React from "react";
import {Listbox, ListboxItem, ListboxSection, cn} from "@nextui-org/react";
import ListBoxWrapper from "./ListBoxWrapper";
import {SettingsIcon} from "../SVG/SettingsIcon";
import {DeleteDocumentIcon} from "../SVG/DeleteDocumentIcon";
import LoginIcon from "../SVG/LoginIcon";
import LogoutIcon from "../SVG/LogoutIcon"

export default function UserActions() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <ListBoxWrapper>
      <Listbox variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection title="" showDivider>  
          <ListboxItem
          className="items-start flex"
            key="new"
            startContent={<SettingsIcon className={iconClasses} />}
          >
            Settings
          </ListboxItem>
          <ListboxItem
          className="items-start flex"
            key="new"
            startContent={<LoginIcon className={iconClasses} />}
          >
            Login
          </ListboxItem>
          <ListboxItem
          className="items-start flex"
            key="new"
            startContent={<LogoutIcon className={iconClasses} />}
          >
            Logout
          </ListboxItem>
        </ListboxSection> 
        <ListboxSection title="">  
          <ListboxItem
            key="delete"
            className="text-danger items-start flex"
            color="danger"
            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Delete History
          </ListboxItem>
        </ListboxSection> 
      </Listbox>
    </ListBoxWrapper>
  );
}
