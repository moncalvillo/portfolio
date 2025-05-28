import { useState } from "react";
import { ServerResponse } from "../../domain/types";
import { Swapper } from "../inputs/swapper/swapper";
import {
  ProjectsRenderer,
  ResumeRenderer,
  TechStackRenderer,
} from "../renderers/renderers";
import { JSONRenderer } from "../renderers/json/jsonRenderer";
import { ToastContainer, toast } from "react-toastify";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { SkeletonLoader } from "../skeleton/skeleton";

type ResponsePrinterProps = {
  response: ServerResponse;
  loading?: boolean;
};
export const ResponsePrinter = (props: ResponsePrinterProps) => {
  const { response, loading } = props;

  const { t } = useTranslation();
  const [responseType, setResponseType] = useState<string | number>(
    t("response:preview")
  );
  if (response && typeof response === "object" && "message" in response) {
    toast(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      icon: <CheckCircleOutlined />,
    });
    return <ToastContainer />;
  }

  if (loading) {
    return <SkeletonLoader active />;
  }

  if (!response) return null;
  return (
    <div>
      {typeof response === "string" && response.startsWith("blob:") ? (
        <ResumeRenderer resumeUrl={response} />
      ) : response && typeof response === "object" ? (
        <>
          <Swapper
            options={[t("response:preview"), t("response:raw")]}
            onChange={setResponseType}
            value={responseType}
          />
          {"projects" in response ? (
            responseType === t("response:raw") ? (
              <JSONRenderer
                title={t("endpoints:projects.title")}
                response={response}
              />
            ) : (
              <ProjectsRenderer projects={response.projects} />
            )
          ) : "technologies" in response ? (
            responseType === t("response:raw") ? (
              <JSONRenderer
                title={t("endpoints:techStack.title")}
                response={response}
              />
            ) : (
              <TechStackRenderer technologies={response.technologies} />
            )
          ) : null}
        </>
      ) : (
        <JSONRenderer response={response} />
      )}
    </div>
  );
};
