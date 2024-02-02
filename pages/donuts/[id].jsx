import styles from "/styles/Detail.module.css";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/items/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();

    return {
      props: { donut: data },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: { donut: null },
    };
  }
};

const Detail = ({ donut }) => {
  const { name, description, price, image } = donut;

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={`${image}`} alt={`${name}`} width="100%" height="100%" layout="responsive" objectFit="cover" />
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
