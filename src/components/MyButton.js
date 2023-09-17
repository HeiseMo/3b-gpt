import { Button } from '@nextui-org/react';
import { PlusIcon } from '../SVG/PlusIcon';
import { SideBarIcon } from '../SVG/SideBarIcon';

const MyButton = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="button-container flex gap-1 items-center">
      <Button
        className='buttonContentLeft w-[250px]'
        color="default"
        variant="bordered"
        startContent={<PlusIcon />}
      >
        New Chat
      </Button>
      <Button
        className='w-[24px] p-0 m-0'
        color="default"
        variant="bordered"
        startContent={<SideBarIcon size={24} />}
        onClick={toggleSidebar} // Add onClick to toggle the sidebar
      >
      </Button>
    </div>
  );
};

export default MyButton;
