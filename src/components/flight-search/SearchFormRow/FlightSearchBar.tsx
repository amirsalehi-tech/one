import {DatePickerButton} from "@/components/DatePicker/DatePickerButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import React from "react";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

const FlightSearchBar = () => {
  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();

  return (
    <div className="bg-[#f5f5f5] rounded-[30px] p-10 flex gap-[8px] items-center w-full">
      {/* Departure */}
      <DatePickerButton
        value={departureDate}
        onChange={(date) => {
          setDepartureDate(date);

          // reset return if invalid
          if (returnDate && date && returnDate < date) {
            setReturnDate(undefined);
          }
        }}
        placeholder="تاریخ رفت"
      />

      {/* Return */}
      <DatePickerButton
        value={returnDate}
        onChange={setReturnDate}
        placeholder="تاریخ برگشت"
        disabled={(date) => (departureDate ? date < departureDate : false)}
      />
      <Select>
        <SelectTrigger className="flex-[1.4]  bg-white rounded-[14px]">
          <SelectValue placeholder="مبدا" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Mashhad</SelectItem>
          <SelectItem value="2">Tehran</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="flex-[1.4]  bg-white rounded-[14px]">
          <SelectValue placeholder="مقصد" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Mashhad</SelectItem>
          <SelectItem value="2">Tehran</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="number"
        placeholder="تعداد مسافر"
        className="flex-[0.7]  bg-white rounded-[14px]"
      />
      <Button
        className="
        px-9
        flex-1
        rounded-full 
        bg-black 
        text-white 
        hover:bg-neutral-800
        "
      >
        جستجو
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default FlightSearchBar;
