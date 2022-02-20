import googleTranslate from "assets/images/google-translate.svg";
import cx from "classnames";
import { Layout } from "components";
import { words as englishWords } from "initial-data/english";
import { words as portugueseWords } from "initial-data/portuguese";
import type { NextPage } from "next";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { pages } from "./constants";
import style from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <Layout pageDetail={pages.home}>
      <div className={cx(style.wordsContainer)}>
        <div className={cx(style.words)}>
          <div className={cx(style.title)}>Portuguese</div>
          {portugueseWords.map((word) => {
            return (
              <div
                className={cx(style.wordRow, style.wordPortugueseRow)}
                key={word.word}
              >
                <a
                  className={style.word}
                  data-word={word.word}
                  href={`https://www.priberam.pt/dlpo/${word.word}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {word.word}
                </a>
              </div>
            );
          })}
        </div>

        <div className={cx(style.words)}>
          <div className={cx(style.title)}>English</div>
          {englishWords.map((word) => {
            return (
              <div
                className={cx(style.wordRow, style.wordPortugueseRow)}
                key={word.word}
              >
                <a
                  className={style.word}
                  data-word={word.word}
                  href={`https://www.priberam.pt/dlpo/${word.word}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {word.word}
                </a>
                <a
                  className={style.translation}
                  href={`https://translate.google.com.br/#en/pt/${word.word}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className={style.translateIcon}>
                    <Image alt="google-translate" src={googleTranslate} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
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
