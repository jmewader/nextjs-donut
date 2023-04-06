import styles from "/styles/Detail.module.css";
import Image from "next/image";

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:6000/items");
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const res = await fetch(`http://localhost:6000/items/${id}`);
//   const data = await res.json();

//   return {
//     props: { donut: data },
//   };
// };

const Detail = ({ donut }) => {
  const { id, name, description, price, image } = donut;

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
      <div className={styles.wrap}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.price}>{price}₽</div>
      </div>
    </div>
  );
};

export default Detail;
