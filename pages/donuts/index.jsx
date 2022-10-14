/*UI*/
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Donuts.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:6000/items");
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
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

const Item = (props) => {
  const { id, name, description, price, image } = props;

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          src={`${image}`}
          alt={`${name}`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <h3 className={styles.title}>{name}</h3>

      <p className={styles.text}>{description}</p>
      <div className={styles.price}>{price}₽</div>
      <Link href={`/donuts/${id}`}>
        <button className={styles.btn}> Подробнее</button>
      </Link>
    </div>
  );
};

export default Donuts;
