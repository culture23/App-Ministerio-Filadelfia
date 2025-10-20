"use client";

import * as React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  placeholder?: string;
}

export function DatePicker({ selected, onSelect, placeholder = "Selecciona una fecha" }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full justify-start text-left font-normal h-[35px] px-4 rounded-2xl border inline-flex items-center gap-2"
          style={{
            borderColor: '#d1d5db',
            backgroundColor: '#ffffff',
            color: selected ? '#1f2937' : '#9ca3af'
          }}
        >
          <CalendarIcon className="h-4 w-4" style={{ color: '2768F5' }} />
          {selected ? format(selected, "PPP", { locale: es }) : <span>{placeholder}</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        style={{ 
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb'
        }}
      >
        <Calendar 
          mode="single" 
          selected={selected} 
          onSelect={onSelect}
          className="rounded-md"
        />
      </PopoverContent>
    </Popover>
  );
}

// Mantener el componente demo por compatibilidad
export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return <DatePicker selected={date} onSelect={setDate} placeholder="Fecha de nacimiento" />;
}
