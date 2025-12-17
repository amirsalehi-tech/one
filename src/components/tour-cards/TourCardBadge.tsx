import {Calendar} from "lucide-react";

type TourCardBadgeProps = {
  dateRange: string;
};

export default function TourCardBadge({dateRange}: TourCardBadgeProps) {
  return (
    <div className="absolute top-3 right-3 z-10">
      <div className="flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium text-gray-900 shadow-sm">
        <Calendar className="size-3.5 text-gray-800/80" />
        <span>{dateRange}</span>
      </div>
    </div>
  );
}
