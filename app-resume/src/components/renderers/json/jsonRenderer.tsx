import { ServerResponse } from "../../../domain/types";
import { SecondaryTitle } from "../../typography/typogs";
import "./style.scss";
export const JSONRenderer = ({
  response,
  title = "JSON Response",
}: {
  response: ServerResponse;
  title?: string;
}) => {
  return (
    <div className="json-renderer">
      <SecondaryTitle>{title}</SecondaryTitle>
      <pre className="json-text">{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};
