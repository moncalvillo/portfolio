import { Collapse } from "antd";
interface AccordionProps {
  items?: Array<AccordionDataProps>;
}

export interface AccordionDataProps {
  key: string;
  label: string;
  children: string | React.ReactNode;
  method: string;
}
export const CustomAccordion = (props: AccordionProps) => {
  const { items = [] } = props;

  if (items.length === 0) return null;

  return (
    <Collapse
      expandIconPosition="end"
      className="accordion"
      accordion
      items={items}
    />
  );
};
