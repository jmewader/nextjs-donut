import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Donuts.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { donuts: data },
  };
};

const Donuts = ({ donuts }) => {
  return (
    <div>
      <h1>Наши пончики</h1>

      <div className={styles.list}>
        {donuts.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.image}>
                  <Image src={`${item.image}`} alt={`${item.name}`} width="100%" height="100%" layout="responsive" objectFit="cover" />
                </div>

                <h3 className={styles.title}>{item.name}</h3>

                <p className={styles.text}>{item.description}</p>
              </div>
              <div className={styles.wrap}>
                <div className={styles.price}>{item.price}₽</div>
                <Link href={`/donuts/${item.id}`}>
                  <button className={styles.btn}>Подробнее</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Donuts;