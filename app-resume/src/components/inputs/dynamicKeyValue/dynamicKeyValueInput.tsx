import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
type DynamicKeyValueProps = {
  form: any;
  disabled: boolean;
};
export const DinamycKeyValueInput = (props: Partial<DynamicKeyValueProps>) => {
  const { form, disabled } = props;

  if (!form.getFieldValue("keyValues")) {
    form.setFieldsValue({
      keyValues: [{ key: "", value: "" }],
    });
  }
  const { t } = useTranslation();
  return (
    <Form.List name="keyValues">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name }) => {
            return (
              <div
                className="d-flex justify-content-center align-items-center "
                key={key}
              >
                <Form.Item className="m-1 w-100" name={[name, "key"]}>
                  <Input placeholder={t("form:key")} disabled={disabled} />
                </Form.Item>
                <Form.Item className="m-1 w-100" name={[name, "value"]}>
                  <Input placeholder={t("form:value")} disabled={disabled} />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => !disabled && remove(name)}
                />
              </div>
            );
          })}
          <Button
            className="mt-2"
            type="dashed"
            onClick={() => add()}
            block
            icon={<PlusOutlined />}
            disabled={disabled}
          >
            {t("form:addField")}
          </Button>
        </>
      )}
    </Form.List>
  );
};
