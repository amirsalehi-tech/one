import {Calendar as CalendarIcon, ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";

type DatePickerButtonProps = {
  value?: Date;
  onChange: (date?: Date) => void;
  placeholder: string;
  disabled?: (date: Date) => boolean;
};

export function DatePickerButton({
  value,
  onChange,
  placeholder,
  disabled,
}: DatePickerButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!value}
          className="
            data-[empty=true]:text-muted-foreground
            flex-[1.1]
            h-10
            font-normal
            flex-row-reverse
            gap-1
            rounded-[14px]
            justify-between
            bg-white
          "
        >
          {/* Icons */}
          <div className="flex items-center gap-1 shrink-0">
            <ChevronDown className="h-4 w-4 opacity-60" />
          </div>
          {/* Text */}
          <span className="flex-1 text-right truncate">
            {value ? format(value, "PPP") : placeholder}
          </span>
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}
