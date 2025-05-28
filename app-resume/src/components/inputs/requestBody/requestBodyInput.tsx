import { useState } from "react";
import { DinamycKeyValueInput } from "../dynamicKeyValue/dynamicKeyValueInput";
import { Swapper } from "../swapper/swapper";
import { JsonTextArea } from "../jsonTextArea/jsonTextAreaInput";
import { Form } from "antd";
import { useTranslation } from "react-i18next";

type RequestBodyInputProps = {
  form: any;
};
export const RequestBodyInput = (props: Partial<RequestBodyInputProps>) => {
  const { form } = props;
  const { t } = useTranslation();
  const [type, setType] = useState<string | number>(t("form:keyValue"));
  const textAreaPlaceholder = `{
    "${t("form:key")}": "${t("form:value")}"
}`;

  return (
    <div className="">
      <Swapper
        value={type}
        onChange={setType}
        options={[t("form:keyValue"), t("form:raw")]}
      />

      {type === t("form:raw") ? (
        <Form.Item name="body">
          <JsonTextArea
            onChange={(value) => form.setFieldsValue({ body: value })}
            value={form.getFieldValue("body")}
            placeholder={textAreaPlaceholder}
            disabled={type !== t("form:raw")}
          />
        </Form.Item>
      ) : (
        <DinamycKeyValueInput form={form} disabled={type === t("form:raw")} />
      )}
    </div>
  );
};
