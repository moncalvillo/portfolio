import { useState } from "react";
import { useTranslation } from "react-i18next";
import spain from "@/assets/lang/spain.png";
import uk from "@/assets/lang/uk.png";
import { Image } from "antd";

export const ChangeLanguageSection = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language || "en");
  const [animationClass, setAnimationClass] = useState("");

  const toggleLanguage = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      const newLang = activeLanguage === "en" ? "es" : "en";
      setActiveLanguage(newLang);
      i18n.changeLanguage(newLang);
      setAnimationClass("fade-in");
    }, 200);
  };

  return (
    <div className="w-100 p-2 d-flex justify-content-end align-items-center">
      <div
        onClick={toggleLanguage}
        className="border rounded-circle bg-primary-palette"
      >
        <Image
          width={30}
          preview={false}
          src={activeLanguage === "en" ? uk : spain}
          alt={activeLanguage === "en" ? "UK Flag" : "Spain Flag"}
          className={`img-fluid ${animationClass}`}
        />
      </div>
    </div>
  );
};
