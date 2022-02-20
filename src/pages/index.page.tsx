import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { pages } from "./constants";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{pages.home.title}</title>
        <meta content={pages.home.title} name="description" />
        <link href="/favicon.png" rel="icon" />
      </Head>

      <main>
        <Link
          href="/"
          locale={router.locale === "en" ? "pt-BR" : "en"}
          passHref
        >
          <button>{t("changeLocale")}</button>
        </Link>
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
