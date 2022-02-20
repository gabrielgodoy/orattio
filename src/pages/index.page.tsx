import { Layout } from "components";
import type { NextPage } from "next";
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
    <Layout pageDetail={pages.home}>
      <div className={styles.container}>
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
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
