import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <NavigationMenu className="flex flex-row my-4 space-x-2">
      <Input placeholder="Search for a recipe" />
      <Button className="bg-transparent text-white hover:bg-zinc-600 cursor-pointer">
        <SearchIcon />
      </Button>
    </NavigationMenu>
  );
}
