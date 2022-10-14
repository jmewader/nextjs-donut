import Head from "next/head";
const Reviews = ({ reviews }) => {

  return (
    <>
      <Head>
        <title>Donuts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="отзывы" />
      </Head>
      <div>
        <h1>Отзывы покупателей</h1>
        <div>
          {reviews.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.id}</div>
                <h3>
                  {item.name},{item.email}
                </h3>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 10),
    },
  };
}

export default Reviews;
