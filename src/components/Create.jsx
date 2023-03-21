import { API_URL } from "./config/constants";
import { ArrowRightOutlined, PictureOutlined } from "@ant-design/icons";
import { Button, Cascader, DatePicker, Form, Input, InputNumber, message, Radio, Upload } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Create.scss";
import { useState } from "react";

const Create = () => {
  const { RangePicker } = DatePicker;
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const onFinish = (val) => {
    axios
      .post(`${API_URL}/products`, {
        name: val.name,
        description: val.description,
        price: val.price,
        seller: val.seller,
        imageUrl: imageUrl,
      })
      .then((result) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error();
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    } else if (info.file.status === "error") {
      alert("파일 전송에 실패했습니다.");
    }
  };

  return (
    <>
      <Form className="FormWrap" onFinish={onFinish}>
        <Form.Item name="upload" valuePropName="fileList">
          <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
            ) : (
              <>
                <div id="upload-img-placeholder">
                  <PictureOutlined />
                </div>
                <p>이미지를 업로드 해주세요</p>
              </>
            )}
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
        <Radio.Group defaultValue="쇼핑" buttonStyle="solid" className="radio">
          <Radio.Button className="radio-btn"  value="쇼핑">쇼핑</Radio.Button>
          <Radio.Button className="radio-btn"  value="맛집탐방">맛집탐방</Radio.Button>
          <Radio.Button className="radio-btn"  value="문화생활">문화생활</Radio.Button>
          <Radio.Button className="radio-btn"  value="엑티비티">엑티비티</Radio.Button>
          <Radio.Button className="radio-btn"  value="조용휴식">조용휴식</Radio.Button>
        </Radio.Group>

        <div className="submit">
          <Button type="primary" size="large">
            패키지 등록하기
          </Button>
          <Button size="large">취소</Button>
        </div>
      </Form>
    </>
  );
};

export default Create;
