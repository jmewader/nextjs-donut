/*COMPONENTS*/
import Link from "next/link";
/*ICONS*/
import { GiDonut } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div className="logo">
          <GiDonut />
        </div>
      </Link>

      <nav>
        <Link href="/">Домой</Link>
        <Link href="/donuts">Пончики</Link>
        <Link href="/about">О нас</Link>
        <Link href="/reviews">Отзывы</Link>
      </nav>
    </header>
  );
};

export default Header;
