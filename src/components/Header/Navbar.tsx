import {Link} from "react-router";

const Navigation = () => {
  const navItems = ["جستجو بليط", "درباره ما", "پرسش های متداول", "تماس با ما"];

  return (
    <nav className="flex  gap-10 items-center justify-center">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to="#"
          className="text-text-primary hover:text-primary-600 transition-colors"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
