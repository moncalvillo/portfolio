import { Button, Image, Tooltip } from "antd";
import { Project } from "../../../domain/types";
import { SecondaryTitle, Text } from "../../typography/typogs";
import "./style.scss";
import { humanizeDateMonthYear } from "../../../utils/utils";
import { useTranslation } from "react-i18next";
type ProjectsRendererProps = {
  projects: Project[];
};

export const ProjectsRenderer = (props: ProjectsRendererProps) => {
  const { projects } = props;
  const { t } = useTranslation();
  const orderedProjects = projects.sort((a, b) => {
    if (a.startDate && b.startDate) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
    return 1;
  });
  return (
    <div className="projects-renderer">
      <SecondaryTitle>{t("endpoints:projects.title")}</SecondaryTitle>
      <div className="projects-container">
        {orderedProjects.map((project, index) => (
          <div key={index} className="project-item shadowed">
            <div className="d-flex justify-content-between align-items-end">
              <SecondaryTitle>{project.title}</SecondaryTitle>
              {project.startDate && (
                <div className="w-50 text-end">
                  <Text>{`${humanizeDateMonthYear(project.startDate)} - ${
                    project.endDate
                      ? humanizeDateMonthYear(project.endDate)
                      : t("endpoints:projects.currently")
                  }`}</Text>
                </div>
              )}
            </div>
            <Text>{project.description}</Text>
            {project.url && (
              <Button
                className="project-button bg-secondary-palette rounded-3"
                onClick={() => window.open(project.url, "_blank")}
              >
                <Text accent>
                  {t("endpoints:projects.goTo")} {project.title}
                </Text>
              </Button>
            )}

            <div className="project-techs d-flex flex-md-wrap gap-2">
              {project.technologies?.map((tech, index) =>
                tech?.logo ? (
                  <Tooltip title={tech.name}>
                    <Image
                      preview={false}
                      key={index}
                      src={tech.logo}
                      height="50px"
                    />
                  </Tooltip>
                ) : (
                  <Text key={index}>{tech.name}</Text>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
