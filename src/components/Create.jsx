import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Upload } from "antd";
import "./Create.scss";

const Create = () => {
  const { RangePicker } = DatePicker;

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
          <Input size="large" bordered={false} placeholder="여행 이름" />
        </Form.Item>
        <Form.Item>
          <InputNumber size="large" bordered={false} placeholder="￦ 가격을 입력하세요" />
        </Form.Item>
        <Form.Item>
          <Cascader
            size="large"
            bordered={false}
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
        <div className="airWrap">
          <div className="airline">
            <Form.Item>
              <Input size="large" bordered={false} placeholder="출발 공항 - 항공사" />
            </Form.Item>
            <Form.Item>
              <Input size="large" bordered={false} placeholder="도착 공항 - 항공사" />
            </Form.Item>
          </div>
          <ArrowRightOutlined className="positionA" />
          <div className="airline">
            <Form.Item>
              <Input size="large" bordered={false} placeholder="비행편명" />
            </Form.Item>
            <Form.Item>
              <Input size="large" bordered={false} placeholder="비행편명" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <RangePicker showTime size="large" bordered={false} />
        </Form.Item>
        <Form.Item>
          <InputNumber size="large" bordered={false} placeholder="총 수량을 입력하세요" />
        </Form.Item>

        <div className="submit">
          <Button type="primary" size="large">
            패키지 등록하기
          </Button>
          <Button size="large">
            취소
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Create;
