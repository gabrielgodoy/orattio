import Link from "next/link";
import { useTranslation } from "next-i18next";
import { pages } from "pages/constants";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background: "#e5e5e5",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <Link href={pages.otherPage.path} passHref>
        <button type="button">{t("toSecondPage")}</button>
      </Link>
    </div>
  );
};
