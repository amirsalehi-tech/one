export type TourCard = {
  id: string;
  image: string;
  title: string;
  price: number;
  dateRange: string; // e.g., "۱۵ تا ۲۰ خرداد"
  description: string;
  href?: string;
};

export type TourCardsSectionProps = {
  title?: string;
  tours: TourCard[];
  showViewMore?: boolean;
};
