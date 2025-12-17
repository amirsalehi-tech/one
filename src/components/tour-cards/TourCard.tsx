import {ChevronLeft} from "lucide-react";
import type {TourCard} from "./types";
import TourCardBadge from "./TourCardBadge";

type TourCardProps = {
  tour: TourCard;
  onClick?: () => void;
};
export default function TourCard({tour, onClick}: TourCardProps) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[28px] cursor-pointer group shadow-lg flex flex-col justify-between aspect-4/5"
      onClick={onClick}
    >
      
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent" />
      </div>

      {/* Date badge */}
      <TourCardBadge dateRange={tour.dateRange} />
      

      {/* Content */}
      <div className=" z-10 p-4 text-white flex flex-col gap-3">
        {/* Pills row (title + price) */}
        <div className="flex items-end justify-between gap-3">
          {/* Title pill (right side in RTL) */}
          

          {/* Price pill */}
          <div className="rounded-full bg-black/55 backdrop-blur-sm px-4 py-2">
            <div className="flex flex-col leading-none">
              <span className="text-[10px] text-white/75 mb-1">تومان</span>
              <span className="text-lg font-bold tracking-tight">
                {new Intl.NumberFormat("fa-IR").format(tour.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
          {tour.description}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-start">
          <button className="inline-flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-sm px-4 py-2 text-xs font-medium transition-all hover:bg-black/65 group/btn">
            <ChevronLeft className="size-4 transition-transform group-hover/btn:-translate-x-0.5" />
            <span>مشاهده</span>
          </button>
        </div>
      </div>
    </div>
  );
}
