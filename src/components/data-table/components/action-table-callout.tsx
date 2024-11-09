"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

import { Table } from "@tanstack/react-table";
import { useState } from "react";

type ActionOption = {
  id: string;
  label: string;
};

export type ActionCallout = {
  id: string;
  title: string;
  icon: React.ReactNode;

  label: string;
  options: ActionOption[];
};

interface IActionTableCalloutProps<TData> extends ActionCallout {
  table: Table<TData>;
}

export function ActionTableCallout<TData>(
  props: Readonly<IActionTableCalloutProps<TData>>
) {
  const { id, label } = props;

  function onChange(value: string) {
    console.log("ActionTableButton", value);
  }

  return (
    <div className="w-auto flex" id={id}>
      <div className="block md:hidden">
        <MobileAction onChange={onChange} {...props} />
      </div>

      <div className="w-fit hidden md:flex items-center gap-100">
        <p className="text-sm text-appGrey-500 font-normal text-nowrap">
          {label}
        </p>
        <DesktopAction onChange={onChange} {...props} />
      </div>
    </div>
  );
}

interface IMobileActionProps extends ActionCallout {
  onChange: (value: string) => void;
}

function MobileAction(props: Readonly<IMobileActionProps>) {
  const { label, icon, onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button type="button">{icon}</button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <p className="w-full text-appGrey-500 text-left text-sm font-normal border-b border-appGrey-100 pb-150">
          {label}
        </p>

        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className="w-full text-appGrey text-left text-sm font-normal border-b border-appGrey-100 py-150"
          >
            {option.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

interface IDesktopActionProps extends ActionCallout {
  onChange: (value: string) => void;
}

function DesktopAction(props: Readonly<IDesktopActionProps>) {
  const { onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Select
      open={isOpen}
      onOpenChange={setIsOpen}
      onValueChange={(value) => onChange(value)}
    >
      <SelectTrigger className="text-appGrey gap-200">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            className="w-full text-appGrey text-left text-sm font-normal border-b border-appGrey-100 py-150"
            key={option.id}
            value={option.id}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
