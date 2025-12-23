import {Card, CardContent} from "@/components/ui/card";
import {Link} from "react-router";
import {ChevronLeft} from "lucide-react";
import type {TourCard} from "./types";

interface Props {
  tour: TourCard;
}

export default function TourCardItem({tour}: Props) {
  return (
    <Card className="group relative h-[420px] overflow-hidden rounded-2xl border-none">
      {/* Background image */}
      <img
        src={tour.image}
        alt={tour.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Date badge */}
      <div className="absolute right-3 top-3 z-20 rounded-[15px] bg-[#c7c7c7] px-2 py-1 text-[10px] backdrop-blur flex gap-1 items-center">
        <img src="/calendar-2.svg" alt="Calendar" className="w-4 h-4" />
        {tour.dateRange}
      </div>

      {/* Gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-black/80 to-transparent" />

      {/* Black curved content */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-10
          rounded-t-[32px]
          overflow-hidden
        "
      >
        {/* Text content overlay */}
        <CardContent className="px-0 card-layout-bg relative z-10 rounded-lg">
          {/* Title and Price */}
          <div className=" flex items-end-safe justify-between gap-3">
            {/* Title */}
            <h3 className="text-right text-[14px] font-semibold text-white flex-1 mb-1 ">
              {tour.title}
            </h3>

            {/* Price */}
            <div className="text-right text-sm text-gray-300 -mt-1 flex flex-col">
              تومان{" "}
              <span className="text-base font-bold text-white">
                {tour.price.toLocaleString("fa-IR")}
              </span>
            </div>
          </div>

          {/* Description and Button */}
          <div className="flex items-center justify-between gap-3 mt-2">
            {/* Description */}
            <p className="line-clamp-2 text-right text-[10px] text-gray-300 flex-1">
              {tour.description}
            </p>

            {/* Link */}
            <Link
              to={tour.href || "#"}
              className="flex items-center justify-center gap-1 text-white hover:text-gray-300 transition-colors shrink-0 text-[10px]"
            >
              مشاهده
              <ChevronLeft className="size-4 shrink-0" />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
