/*UI*/
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Donuts.module.css";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:6000/items");
//   const data = await res.json();

//   return {
//     props: { donuts: data },
//   };
// };

const Donuts = () => {
  const donuts = {
    list: [
      {
        name: "Пончик с клубникой",
        image: "/images/donutstrawberry.jpg",
        description: "Пончик с натуральной клубничной начинкой и разноцветной посыпкой. Яркий, насыщенный вкус и притягательный аромат этой сладкой выпечки прекрасно дополнит любое чаепитие.",
        price: "150",
        id: "1",
      },
      {
        name: "Пончик с шоколадом",
        image: "/images/donutchoco.jpg",
        description: "Шоколадный Донат - это классический пончик в шоколадной глазури, который просто тает во рту!",
        price: "170",
        id: "2",
      },
      {
        name: "Пончик с ванилью",
        image: "/images/donutvanilla.jpg",
        description: "Донат с ванильным кремом – это ароматный пончик с нежной начинкой из ванильного крема, покрытый белой и шоколадной глазурью. ",
        price: "130",
        id: "3",
      },
    ],
  };

  return (
    <div>
      <h1>Наши пончики</h1>

      <div className={styles.list}>
        {donuts.list.map((item) => {
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
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={`${image}`} alt={`${name}`} width="100%" height="100%" layout="responsive" objectFit="cover" />
        </div>

        <h3 className={styles.title}>{name}</h3>

        <p className={styles.text}>{description}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.price}>{price}₽</div>
        {/* <Link href={`/donuts/${id}`}>
          <button className={styles.btn}>Подробнее</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Donuts;
