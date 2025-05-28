import { useState } from "react";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { Box, ResponsePrinter } from "@/components/boxes";
import { ApiForm } from "@/components/forms/apiForm/form";
import { Text } from "@/components/typography/typogs";
import { ServerResponse } from "@/domain/types";

export const ApiFormSection = () => {
  const [response, setResponse] = useState<ServerResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <Box>
      <Text>{t("apiExplanation:makeRequest.p1")}</Text>
      <Text>{t("apiExplanation:makeRequest.method")}</Text>
      <Text>{t("apiExplanation:makeRequest.url")}</Text>
      <Text>{t("apiExplanation:makeRequest.parameters")}</Text>
      <Divider />
      <ApiForm setResponse={setResponse} setLoading={setLoading} />

      <Divider />
      <ResponsePrinter response={response} loading={loading} />
    </Box>
  );
};
