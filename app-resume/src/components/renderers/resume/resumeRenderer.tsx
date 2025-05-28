import { ResumeResponse } from "../../../domain/types";
import { SecondaryTitle } from "../../typography/typogs";
import "./style.scss";
type ResumeRendererProps = {
  resumeUrl: ResumeResponse;
};

export const ResumeRenderer = (props: ResumeRendererProps) => {
  const { resumeUrl } = props;
  return (
    <div className="resume-renderer">
      <SecondaryTitle>Resume</SecondaryTitle>
      <iframe
        src={resumeUrl}
        width="100%"
        height="500px"
        title="Resume PDF"
        className="resume-renderer-iframe"
      />
    </div>
  );
};
