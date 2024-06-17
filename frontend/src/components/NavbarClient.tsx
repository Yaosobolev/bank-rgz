import { Link } from "react-router-dom";

export const NavbarClient: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 px-4 pt-24 border-r-2 ">
      <Link
        to="/credit-contract"
        className="transition-all hover:-translate-y-1"
      >
        Выдача кредита
      </Link>
      <Link
        to="/update-contract"
        className="transition-all hover:-translate-y-1"
      >
        Обновление кредита
      </Link>
      <Link to="/rate" className="transition-all hover:-translate-y-1">
        Курсы валют
      </Link>
      <Link
        to="/report-users-credit"
        className="transition-all hover:-translate-y-1"
      >
        Kлиенты в опр банке
      </Link>
      <Link
        to="/report-users-credit-currency"
        className="transition-all hover:-translate-y-1"
      >
        Kлиенты в опр банке и валют
      </Link>
      <Link
        to="/report-credit-expert"
        className="transition-all hover:-translate-y-1"
      >
        Кредиты эксперта
      </Link>
      <Link to="/credit-expert" className="transition-all hover:-translate-y-1">
        Кредит
      </Link>
      <Link to="login" className="mt-4 transition-all hover:-translate-y-1">
        Выход
      </Link>
    </div>
  );
};
