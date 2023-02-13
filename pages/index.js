import styles from "@/styles/Home.module.css";
import { SearchCountry } from "@/components/SearchCountry";
import { DataCountry } from "@/components/DataCountry";
import { useState } from "react";
import Layout from "@/Custom/Layout";
const key_url = process.env.key_url;

export default function Home({ key_url }) {
  const [isSearch, setIsSearch] = useState([{ find: false }, { data: [] }]);
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <Layout title={"WeatherFeik"} />
      <main className={styles.mainBox}>
        <div
          className={
            isSearch[0].find && !isEmpty ? styles.dataBox : styles.divBox
          }
        >
          <SearchCountry
            styles={styles}
            setIsSearch={setIsSearch}
            setIsEmpty={setIsEmpty}
            key_url={key_url}
          />
          <DataCountry isSearch={isSearch} isEmpty={isEmpty} styles={styles} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      key_url,
    },
  };
}
