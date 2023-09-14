import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import UserActions from "./UserActions";

const Footer = () => {
  return (
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
      <Image
        alt="nextui logo"
        height={40}
        radius="sm"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width={40}
      />
      <div className="items-start flex flex-col">
        <p className="text-md">User</p>
        <p className="text-small text-default-500">user@email.com</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardFooter>
        <UserActions />
    </CardFooter>
    <CardBody>
      <p className="text-default-500 text-small">Powered by Llama 2</p>
    </CardBody>
    <Divider/>
  </Card>
  );
};

export default Footer;
