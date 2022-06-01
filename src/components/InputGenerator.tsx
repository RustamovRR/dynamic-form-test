import React, { FC } from "react";
import { DatePicker, Form, Input, Select as AntSelect } from "antd";

export type SelectOptionTypes = {
  key?: number | string;
  title?: string | number;
  value?: string | number;
};

type Props = {
  field: "text" | "date" | "number" | "select";
  label?: string;
  placeholder?: string;
  options?: SelectOptionTypes[];
};

const InputGenerator: FC<Props> = ({
  field,
  label,
  placeholder,
  options,
  ...props
}): JSX.Element => {
  const getFields = (field: string) => {
    switch (field) {
      case "text":
        return <Input placeholder={placeholder} />;
      case "date":
        return <DatePicker placeholder={`${label}ni tanlang`} />;
      case "number": {
        return <Input placeholder={placeholder} />;
      }
      case "select":
        return (
          <AntSelect placeholder={`${label}ni tanlang`}>
            {options?.map(({ title, value, key }) => (
              <AntSelect.Option key={key} value={value ? value : ""}>
                {title}
              </AntSelect.Option>
            ))}
          </AntSelect>
        );
      default:
        return false;
    }
  };

  return (
    <>
      <Form.Item label={label}>{getFields(field)}</Form.Item>
    </>
  );
};

export default InputGenerator;
