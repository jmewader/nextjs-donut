import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const [counter, setCounter] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div>
      <h3>Извините, такой страницы не существует..</h3>
      <p>
        Переход на
        <Link href="/">
          <a> главную </a>
        </Link>
        <span>через {counter}</span>
      </p>
    </div>
  );
};

export default NotFound;
