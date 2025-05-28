import Marquee from "react-fast-marquee";
import {
  react,
  docker,
  nodejs,
  typescript,
  javascript,
  aws,
  graphql,
  postgresql,
  mysql,
  git,
  sequelize,
  java,
  bitbucket,
} from "../../assets/techstack";
import { Image } from "antd";
import "./style.scss";
export const CustomMarquee = () => {
  return (
    <Marquee direction="right">
      <div className=" image-container  ">
        <MarqueeImage image={nodejs} alt="NodeJS" />
        <MarqueeImage image={react} alt="React" />
        <MarqueeImage image={typescript} alt="TypeScript" />
        <MarqueeImage image={docker} alt="Docker" />
        <MarqueeImage image={graphql} alt="Graphql" />
        <MarqueeImage image={javascript} alt="JavaScript" />
        <MarqueeImage image={aws} alt="AWS" />
        <MarqueeImage image={postgresql} alt="PostgreSQL" />
        <MarqueeImage image={mysql} alt="MySQL" />
        <MarqueeImage image={git} alt="Git" />
        <MarqueeImage image={sequelize} alt="Sequelize" />
        <MarqueeImage image={java} alt="Java" />
        <MarqueeImage image={bitbucket} alt="Bitbucket" />
      </div>
    </Marquee>
  );
};

interface MarqueeImageProps {
  image: string;
  alt: string;
}

const MarqueeImage = (props: MarqueeImageProps) => {
  const { image = "https://picsum.photos/200/300", alt = "Alt" } = props;
  return (
    <Image className="marquee-image" preview={false} alt={alt} src={image} />
  );
};
