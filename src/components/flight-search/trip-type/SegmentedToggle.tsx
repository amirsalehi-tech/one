import {ToggleGroup, ToggleGroupItem} from "@radix-ui/react-toggle-group";
import type {ToggleItem} from "./types";

type Props = {
  items: ToggleItem[];
  defaultValue: string;
  className?: string;
};

const SegmentedToggle = ({items, defaultValue, className}: Props) => {
  return (
    <ToggleGroup
      type="single"
      defaultValue={defaultValue}
      className={`
        bg-white
        rounded-[14px]
        p-1
        shadow-sm
        flex
        gap-2
        ${className ?? ""}
      `}
    >
      {items.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          className="
            h-8
            px-4
            !rounded-[14px]
            overflow-hidden
            flex
            items-center
            justify-center
            gap-2
            transition-colors
            data-[state=on]:bg-black
            data-[state=on]:text-white
          "
        >
          {item.icon && (
            <span className="size-4 flex items-center justify-center shrink-0 [&_svg]:size-4 [&_svg]:stroke-current">
              {item.icon}
            </span>
          )}
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default SegmentedToggle;
