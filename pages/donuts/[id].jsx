import styles from "/styles/Detail.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params.id;
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
  if (!donut) {
    return <div>Error fetching data</div>;
  }

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