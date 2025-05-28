import { useTranslation } from "react-i18next";
import { Box } from "@/components/boxes/box";
import {
  PrimaryTitle,
  SecondaryTitle,
  Text,
} from "@/components/typography/typogs";

export const SummarySection = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <div className="text-center my-4 ">
        <SecondaryTitle>{t("bioSummary:title")}</SecondaryTitle>
        <PrimaryTitle>{t("bioSummary:role")}</PrimaryTitle>
        <SecondaryTitle>Pablo Gonzalez Moncalvillo</SecondaryTitle>
        <Text>{t("bioSummary:p1")}</Text>
      </div>
    </Box>
  );
};
