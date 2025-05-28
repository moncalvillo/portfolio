import { humanizeDate } from "../utils/utils";
import { Text } from "../components/typography/typogs";

export const FooterSection = () => {
  return (
    <div className="container-fluid d-flex flex-row justify-content-between align-items-center w-100 p-2 mb-3">
      <Text className="text-muted fs-6">Pablo Gonzalez Moncalvillo</Text>
      <Text className="text-muted fs-6">
        Last edited: {humanizeDate("2025-02-27")}
      </Text>
    </div>
  );
};
