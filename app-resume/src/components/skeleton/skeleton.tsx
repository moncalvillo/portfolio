import { Skeleton } from "antd";

type SkeletonLoaderProps = {
  active?: boolean;
  number?: number;
};
export const SkeletonLoader = (props: SkeletonLoaderProps) => {
  const { active } = props;
  return <Skeleton active={active} />;
};
