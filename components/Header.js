/*COMPONENTS*/
import Link from "next/link";
/*ICONS*/
import { GiDonut } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div>
        <GiDonut />
      </div>

      <nav>
        <Link href="/">
          <a>Домой</a>
        </Link>
        <Link href="/about">
          <a>О нас</a>
        </Link>
        <Link href="/reviews">
          <a>Отзывы</a>
        </Link>
        <Link href="/donuts">
          <a>Пончики</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
