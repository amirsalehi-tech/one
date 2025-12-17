import HeroImage from "./hero/HeroImage";
import FlightSearchBar from "./SearchFormRow/FlightSearchBar";
import SegmentedToggle from "./trip-type/SegmentedToggle";
import TravelTypeTabs from "./trip-type/tabs/TravelTypeTabs";
import {IconFlight} from "../icons/IconFlight";

export default function FlightSearchSection() {
  return (
    <div className="relative">
      <div>
        <HeroImage />
      </div>
      <div className="flex flex-col z-10 bottom-[-5vh] w-full right-[50%] translate-x-[50%] max-w-[73vw] absolute">
        {/* Hero */}

        {/* Overlay */}
        <div className="flex justify-between items-end">
          <TravelTypeTabs />
          <div className="flex gap-3">
            <SegmentedToggle
              defaultValue="one-way"
              className=""
              items={[
                {value: "one-way", label: "داخلی"},
                {value: "round-trip", label: "خارجی"},
              ]}
            />
            <SegmentedToggle
              className=""
              defaultValue="one-way"
              items={[
                {
                  value: "one-way",
                  label: "یک‌طرفه",
                  icon: <IconFlight size={16} />,
                },
                {
                  value: "round-trip",
                  label: "رفت و برگشت",
                  icon: <IconFlight size={16} />,
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <FlightSearchBar />
        </div>
      </div>
    </div>
  );
}
