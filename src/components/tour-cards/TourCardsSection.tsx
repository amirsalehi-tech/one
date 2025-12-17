import {ChevronRight} from "lucide-react";
import type {TourCardsSectionProps} from "./types";
import TourCard from "./TourCard";

export default function TourCardsSection({
  title = "مشاهده بیشتر",
  tours,
  showViewMore = true,
}: TourCardsSectionProps) {
  return (
    <section className="w-full py-6">
      {/* Header */}
      {showViewMore && (
        <div className="flex items-center gap-2 mb-6 cursor-pointer group w-fit">
          <ChevronRight className="size-5 text-gray-600 group-hover:text-gray-900 transition-all group-hover:translate-x-1" />
          <h2 className="text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
            {title}
          </h2>
        </div>
      )}

      {/* Horizontal Scrollable Cards */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
        <div className="flex gap-4 pb-4 min-w-max">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="shrink-0 w-[78vw] max-w-[320px] snap-start"
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
