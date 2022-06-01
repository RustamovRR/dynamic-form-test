import React, { FC } from "react";
import { Col, Form, Row } from "antd";

import { ElementsType } from "../types/contract";
import InputGenerator from "./InputGenerator";

type Props = {
  title: string;
  elements: ElementsType[];
};

const CreditContract: FC<Props> = ({ title, elements }): JSX.Element => {
  return (
    <div style={{ marginBottom: 40 }}>
      <Row justify="center">
        <h1>{title}</h1>
      </Row>

      <Form layout="vertical">
        <Row  gutter={20}>
          {elements.map((element) => (
            <Col span={6} key={element.id}>
              <InputGenerator
                field={element.type}
                label={element.label}
                placeholder={element.placeholder}
                options={element.data?.map((data) => ({
                  title: data.name,
                  value: data.id,
                  key: data.id,
                }))}
              />
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
};

export default CreditContract;
