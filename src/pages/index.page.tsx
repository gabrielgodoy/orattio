import { Layout } from "components";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { pages } from "./constants";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <Layout pageDetail={pages.home}>
      <div className={styles.container}>Some content</div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
