import "./style.scss";

import { Image } from "antd";
import { Technology } from "../../../domain/types";
import { SecondaryTitle } from "../../typography/typogs";
import { useTranslation } from "react-i18next";

type TechStackRendererProps = {
  technologies: Technology[];
};
export const TechStackRenderer = (props: TechStackRendererProps) => {
  const { technologies } = props;
  const { t } = useTranslation();
  const onClick = (tech: Technology) => {
    if (tech.logo) {
      window.open(tech.url, "_blank");
    }
  };

  return (
    <div className="techs-renderer">
      <SecondaryTitle>{t("endpoints:techStack.title")}</SecondaryTitle>
      <div className="techs-container">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="techs-item shadowed"
            onClick={() => onClick(tech)}
          >
            <div className="tech-item-logo">
              {tech.logo ? (
                <Image preview={false} src={tech.logo} alt={tech.name} />
              ) : (
                <SecondaryTitle className="text-center">
                  {tech.name}
                </SecondaryTitle>
              )}
            </div>
            <div className="tech-info">
              <h5 className="text-center">{tech.name}</h5>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
