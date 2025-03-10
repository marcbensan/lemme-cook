"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function AddIngredient() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(!!e.currentTarget.value);
  };

  return (
    <Command className="rounded-lg border shadow-md">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="add-ingredient">Add an ingredient</Label>
        <Input
          id="add-ingredient"
          placeholder="Type a command or search..."
          onChangeCapture={handleInputChange}
        />
      </div>
      {isOpen && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Pear</CommandItem>
            <CommandItem>Steak</CommandItem>
            <CommandItem disabled>Egg</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      )}
    </Command>
  );
}
