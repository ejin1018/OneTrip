import { PlusOutlined } from "@ant-design/icons";
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect, Upload } from "antd";
import "./Create.scss";

const Create = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  return (
    <>
      <Form className="FormWrap">
        <Form.Item valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                이미지
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Input placeholder="여행 이름" />
        </Form.Item>
        <Form.Item>
          <InputNumber placeholder="￦ 가격을 입력하세요" />
        </Form.Item>
        <Form.Item>
          <Cascader
            placeholder="여행지를 선택해주세요"
            style={{ textAlign: "left" }}
            options={[
              {
                value: "국내",
                label: "국내",
                children: [
                  {
                    value: "부산",
                    label: "부산",
                  },
                  {
                    value: "서울",
                    label: "서울",
                  },
                  {
                    value: "인천",
                    label: "인천",
                  },
                ],
              },
              {
                value: "해외",
                label: "해외",
                children: [
                  {
                    value: "일본",
                    label: "일본",
                  },
                  {
                    value: "중국",
                    label: "중국",
                  },
                  {
                    value: "미국",
                    label: "미국",
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <InputNumber placeholder="총 수량을 입력하세요" />
        </Form.Item>


        <div className="submit">
          <Form.Item>
            <Button>패키지 등록하기</Button>
          </Form.Item>
          <Form.Item>
            <Button>패키지 등록하기</Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Create;
