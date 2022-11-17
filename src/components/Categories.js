import { Link } from "react-router-dom";
import { useCategories } from "../hooks/Categories.hook";

const Categories = () => {
  const { categories } = useCategories();

  return (
    <ul className="navbar-nav bg-light d-flex flex-row justify-content-center border-bottom border-dark p-3">
      {categories.map((category) => (
        <li className="nav-item mx-5 fs-5" key={category}>
          <Link to={category} className="nav-link">
            {category.slice(0).charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
