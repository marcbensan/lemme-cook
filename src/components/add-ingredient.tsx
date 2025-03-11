"use client";

import { useState } from "react";
import { TagInput } from "emblor";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./ui/command";

interface Tag {
  id: string;
  text: string;
}

export default function AddIngredient() {
  const tags: Tag[] = [];
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const sampleData: Tag[] = [
    { id: "1", text: "apple" },
    { id: "2", text: "banana" },
    { id: "3", text: "cherry" },
    { id: "4", text: "date" },
    { id: "5", text: "elderberry" },
    { id: "6", text: "fig" },
    { id: "7", text: "grape" },
    { id: "8", text: "honeydew" },
    { id: "9", text: "kiwi" },
    { id: "10", text: "lemon" },
    { id: "11", text: "mango" },
    { id: "12", text: "nectarine" },
    { id: "13", text: "orange" },
    { id: "14", text: "papaya" },
    { id: "15", text: "quince" },
    { id: "16", text: "raspberry" },
    { id: "17", text: "strawberry" },
    { id: "18", text: "tangerine" },
    { id: "19", text: "ugli fruit" },
    { id: "20", text: "vanilla" },
    { id: "21", text: "watermelon" },
    { id: "22", text: "xigua" },
    { id: "23", text: "yellow passion fruit" },
    { id: "24", text: "zucchini" },
    { id: "25", text: "apricot" },
    { id: "26", text: "blackberry" },
    { id: "27", text: "blueberry" },
    { id: "28", text: "cantaloupe" },
    { id: "29", text: "coconut" },
    { id: "30", text: "cranberry" },
    { id: "31", text: "dragon fruit" },
    { id: "32", text: "durian" },
    { id: "33", text: "gooseberry" },
    { id: "34", text: "grapefruit" },
    { id: "35", text: "guava" },
    { id: "36", text: "jackfruit" },
    { id: "37", text: "kumquat" },
    { id: "38", text: "lime" },
    { id: "39", text: "lychee" },
    { id: "40", text: "mandarin" },
    { id: "41", text: "mulberry" },
    { id: "42", text: "olive" },
    { id: "43", text: "passion fruit" },
    { id: "44", text: "peach" },
    { id: "45", text: "pear" },
    { id: "46", text: "persimmon" },
    { id: "47", text: "pineapple" },
    { id: "48", text: "plum" },
    { id: "49", text: "pomegranate" },
    { id: "50", text: "pumpkin" },
    { id: "51", text: "rambutan" },
    { id: "52", text: "red currant" },
    { id: "53", text: "starfruit" },
    { id: "54", text: "tamarind" },
    { id: "55", text: "tomato" },
    { id: "56", text: "white currant" },
    { id: "57", text: "yuzu" },
    { id: "58", text: "ackee" },
    { id: "59", text: "bilberry" },
    { id: "60", text: "boysenberry" },
    { id: "61", text: "clementine" },
    { id: "62", text: "cloudberry" },
    { id: "63", text: "feijoa" },
    { id: "64", text: "jabuticaba" },
    { id: "65", text: "jambul" },
    { id: "66", text: "langsat" },
    { id: "67", text: "longan" },
    { id: "68", text: "loquat" },
    { id: "69", text: "mangosteen" },
    { id: "70", text: "marionberry" },
    { id: "71", text: "miracle fruit" },
    { id: "72", text: "mulberry" },
    { id: "73", text: "nance" },
    { id: "74", text: "pawpaw" },
    { id: "75", text: "pitanga" },
    { id: "76", text: "pitaya" },
    { id: "77", text: "pomelo" },
    { id: "78", text: "red banana" },
    { id: "79", text: "salak" },
    { id: "80", text: "satsuma" },
    { id: "81", text: "soursop" },
    { id: "82", text: "surinam cherry" },
    { id: "83", text: "tangelo" },
    { id: "84", text: "white sapote" },
    { id: "85", text: "wild strawberry" },
    { id: "86", text: "wood apple" },
    { id: "87", text: "yangmei" },
    { id: "88", text: "youngberry" },
    { id: "89", text: "ziziphus" },
    { id: "90", text: "acerola" },
    { id: "91", text: "ambarella" },
    { id: "92", text: "babaco" },
    { id: "93", text: "bignay" },
    { id: "94", text: "black sapote" },
    { id: "95", text: "calamansi" },
    { id: "96", text: "cherimoya" },
    { id: "97", text: "cupuacu" },
    { id: "98", text: "horned melon" },
    { id: "99", text: "lucuma" },
    { id: "100", text: "mamoncillo" },
  ];

  return (
    <TagInput
      tags={exampleTags}
      setTags={(newTags) => {
        setExampleTags(newTags);
      }}
      placeholder="Add a tag"
      styleClasses={{
        input: "w-full",
        autoComplete: {
          popoverTrigger: "pr-5",
          popoverContent: "p-2 ml-[-24px]",
          commandItem: "cursor-pointer hover:bg-gray-600",
        },
        tag: {
          body: "flex items-center pl-4",
        },
        tagList: {
          container: "my-4",
        },
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      inlineTags={false}
      inputFieldPosition={"top"}
      maxTags={10}
      showCounter={true}
      enableAutocomplete={true}
      autocompleteOptions={sampleData}
      restrictTagsToAutocompleteOptions={false}
    />
  );
}
