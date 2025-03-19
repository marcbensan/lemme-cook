"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IngredientOffer {
  price: number;
  store: string;
  distance: number;
  address: string;
}

export default function IngredientOffers() {
  return (
    <div className="py-12 px-16 w-full">
      <p className="font-bold text-7xl">TOMATO SAUCE</p>
      <hr className="my-12 w-full" />
      <div className="flex flex-row space-x-8">
        <Image
          width={4000}
          height={2000}
          alt="recipe-img"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          className="rounded-lg w-1/2"
        />
        <ShopsTable />
      </div>
      <hr className="my-12"/>
    </div>
  );
}

const sampleIngredientOffers: IngredientOffer[] = [
  {
    price: 2.99,
    store: "Metro",
    distance: 1.2,
    address: "123 Main St, City, State",
  },
  {
    price: 2.49,
    store: "Food Basics",
    distance: 2.5,
    address: "456 Elm St, City, State",
  },
  {
    price: 2.79,
    store: "NoFrills",
    distance: 3.0,
    address: "789 Oak St, City, State",
  },
  {
    price: 3.19,
    store: "Walmart",
    distance: 4.1,
    address: "101 Pine St, City, State",
  },
  {
    price: 3.49,
    store: "Loblaws",
    distance: 5.2,
    address: "202 Maple St, City, State",
  },
  {
    price: 2.89,
    store: "FreshCo",
    distance: 2.8,
    address: "303 Birch St, City, State",
  },
  {
    price: 3.29,
    store: "Costco",
    distance: 6.3,
    address: "404 Cedar St, City, State",
  },
  {
    price: 3.59,
    store: "Zehrs",
    distance: 7.4,
    address: "505 Spruce St, City, State",
  },
];

const columns: ColumnDef<IngredientOffer>[] = [
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-right"
      >
        Price
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "store",
    header: "Store",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("store")}</div>
    ),
  },
  {
    accessorKey: "distance",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-right"
      >
        Distance
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-center my-4">
        {row.getValue("distance")} km
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("address")}</div>
    ),
  },
];

function ShopsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: sampleIngredientOffers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
