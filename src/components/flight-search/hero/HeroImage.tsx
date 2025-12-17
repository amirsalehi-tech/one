export default function HeroImage() {
  return (
    <div className="relative h-[511px] w-full overflow-hidden rounded-[40px]">
      <img
        src="./hero-image.jpg"
        alt="hero image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
