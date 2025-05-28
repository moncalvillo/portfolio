import { Button, Col, Form, Input, Row, Select } from "antd";
import { METHODS } from "@/domain/endpoints";
import { RequestBodyInput } from "@/components/inputs/requestBody/requestBodyInput";
import { useState } from "react";
import { Text } from "@/components/typography/typogs";
import { parseKeyValues } from "@/utils/utils";
import { toast } from "react-toastify";
import { AxiosService } from "@/services/axios/axios.service";
import { useTranslation } from "react-i18next";

type ApiFormProps = {
  setResponse: (response: any) => void;
  setLoading?: (loading: boolean) => void;
};

export const ApiForm = (props: ApiFormProps) => {
  const [form] = Form.useForm();
  const { setResponse, setLoading } = props;
  const { t, i18n } = useTranslation();

  const onFinish = async (values: { [key: string]: any }) => {
    try {
      setLoading?.(true);
      values.body = values.body && JSON.parse(values.body);

      await new Promise((resolve) => setTimeout(resolve, 5000));
      const data = values.body || parseKeyValues(values.keyValues);
      const response = await AxiosService.makeRequest(
        values.path?.trim(),
        values.method?.trim(),
        data ?? null,
        i18n.language
      );
      setResponse(response);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading?.(false);
    }
  };

  const [selectedMethod, setSelectedMethod] = useState(METHODS[0]);
  return (
    <Form className="form" form={form} onFinish={onFinish}>
      <Row gutter={16}>
        <Col span={7}>
          <Form.Item
            label={t("form:method")}
            name="method"
            initialValue={selectedMethod}
          >
            <Select
              value={selectedMethod}
              options={METHODS.map((method) => ({
                label: method,
                value: method,
              }))}
              defaultActiveFirstOption
              onChange={(value) => setSelectedMethod(value)}
            />
          </Form.Item>
        </Col>
        <Col span={17}>
          <Form.Item
            label={t("form:url")}
            name="path"
            rules={[
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input placeholder="https://moncalvillo-api-resumen.onrender.com/api/projects" />
          </Form.Item>
        </Col>
      </Row>
      {["POST", "PUT"].includes(selectedMethod) && (
        <Form.Item label={t("form:requestBody")}>
          <RequestBodyInput form={form} />
        </Form.Item>
      )}
      <Form.Item>
        <Button
          className="bg-secondary-palette rounded-3"
          block
          htmlType="submit"
        >
          <Text accent>{t("form:request")}</Text>
        </Button>
      </Form.Item>
    </Form>
  );
};
