import styles from "/styles/Detail.module.css";
import Image from "next/image";
import { DONUTS_DATA } from "../../components/data/donuts";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const donut = DONUTS_DATA.find((item) => item.id === id);

  if (!donut) {
    return <div>Error fetching data</div>;
  }

  const { name, description, price, image } = donut;

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={image} alt={name} width="100%" height="100%" layout="responsive" objectFit="cover" />
      </div>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.price}>{price}₽</div>
      </div>
    </div>
  );
};

export default Detail;
