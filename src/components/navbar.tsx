import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <NavigationMenu>
      <Input placeholder="Search for a recipe" className="my-4 w-full" />
    </NavigationMenu>
  );
}
