import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1 className="md:text-6xl mb-10 text-4xl lg:text-8xl font-bold text-center  relative z-50 text-white pt-10">
      Expense <Link to="/">GQL</Link>
    </h1>
  );
};
export default Header;
