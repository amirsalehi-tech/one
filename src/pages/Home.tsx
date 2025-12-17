import Header from "../components/Header/Header";
import FlightSearchSection from "../components/flight-search/FlightSearchSection";
import TourCardsSection from "../components/tour-cards/TourCardsSection";
import type {TourCard} from "../components/tour-cards/types";

// Sample tour data - Replace with actual data from API
const sampleTours: TourCard[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    title: "تور شیراز",
    price: 9820000,
    dateRange: "۱۵ تا ۲۰ خرداد",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "#",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    title: "تور اصفهان",
    price: 8750000,
    dateRange: "۲۰ تا ۲۵ خرداد",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "#",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    title: "تور کیش",
    price: 12500000,
    dateRange: "۱۰ تا ۱۵ تیر",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "#",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
    title: "تور یزد",
    price: 7200000,
    dateRange: "۵ تا ۱۰ مرداد",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "#",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen w-full xl:max-w-[1224px] 2xl:max-w-[1360px] mx-auto">
      {/* Header with 24px top margin */}
      <header className=" mt-6">
        <div className="w-full">
          <Header />
        </div>
      </header>

      {/* Section 1 - Flight Search */}
      <section className=" mt-10">
        <FlightSearchSection />
      </section>

      {/* Section 2 - Tour Cards */}
      <section className="mt-16 px-4">
        <TourCardsSection tours={sampleTours} />
      </section>
    </div>
  );
};

export default Home;
