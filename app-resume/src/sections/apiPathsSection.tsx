import { Box } from "../components/boxes/box";
import { CustomAccordion } from "../components/accordion/accordion";
import { UrlBox } from "../components/boxes/urlBox";
import { Text } from "../components/typography/typogs";
import { useTranslation } from "react-i18next";
import { ApiEndpoint, getEndpoints } from "@/domain/endpoints";

export const ApiPathsSection = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text>{t("apiExplanation:p1")}</Text>
      <Text>{t("apiExplanation:p2")}</Text>
      <Text>{t("apiExplanation:serverUrl")} </Text>
      <UrlBox>{import.meta.env.VITE_API_URL}</UrlBox>
      <CustomAccordion items={accordionData(getEndpoints(t))} />
    </Box>
  );
};
const accordionData = (endpoints: ApiEndpoint[]) => {
  return endpoints.map((endpoint, index) => ({
    key: index.toString(),
    label: `${endpoint.method} - ${endpoint.url}`,
    method: endpoint.method,
    children: (
      <div>
        <Text>{endpoint.description}</Text>
        <UrlBox>
          {import.meta.env.VITE_API_URL}
          {endpoint.url}
        </UrlBox>
        {endpoint.parameters && (
          <div>
            <Text>
              <strong>Parameters:</strong>
            </Text>
            <ul>
              {endpoint.parameters.map((param, paramIndex) => (
                <li key={paramIndex}>
                  <strong>{param.name}:</strong> {param.description} (
                  {param.type})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  }));
};
