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
        image: imageUrl,
        p_name: val.p_name,
        price: val.price,
        p_country: val.p_country,
        p_area: val.p_area,
        trans: val.trans,
        departure: val.departure,
        retrans: val.retrans,
        redeparture: val.redeparture,
        p_snum: val.p_snum,
        p_enum: val.p_enum,
        p_sdate: val.p_sdate,
        p_edate: val.p_edate,
        count: val.count,
        theme: val.theme,
        hotel: val.hotel,
      })
      .then((result) => {
        console.log(result);
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
        <Form.Item
          name="p_name"
          rules={[
            { required: true, message: "여행 이름은 필수 입력 사항입니다." },
          ]}>
          <Input size="large" bordered={false} placeholder="여행 이름" />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            { required: true, message: "가격은 필수 입력 사항입니다." },
          ]}>
          <InputNumber size="large" bordered={false} placeholder="￦ 가격을 입력하세요" />
        </Form.Item>
        <Form.Item
          name="p_area"
          rules={[
            { required: true, message: "여행지는 필수 입력 사항입니다." },
          ]}>
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
        <Form.Item
          name="hotel">
          <Input size="large" bordered={false} placeholder="숙소" />
        </Form.Item>
        <div className="airWrap">
          <div className="airline">
            <Form.Item
              name="departure"
              rules={[
                { required: true, message: "출발지는 필수 입력 사항입니다." },
              ]}>
              <Input size="large" bordered={false} placeholder="출발지" />
            </Form.Item>
            <Form.Item
              name="redeparture"
              rules={[
                { required: true, message: "도착지는 필수 입력 사항입니다." },
              ]}>
              <Input size="large" bordered={false} placeholder="도착지" />
            </Form.Item>
          </div>
          <ArrowRightOutlined className="positionA" />
          <div className="airline">
            <Form.Item
              name="trans"
              rules={[
                { required: true, message: "교통수단은 필수 입력 사항입니다." },
              ]}>
              <Input size="large" bordered={false} placeholder="출발-교통수단" />
            </Form.Item>
            <Form.Item
              name="retrans"
              rules={[
                { required: true, message: "교통수단은 필수 입력 사항입니다." },
              ]}>
              <Input size="large" bordered={false} placeholder="도착-교통수단" />
            </Form.Item>
          </div>
          <div className="airline">
            <Form.Item
              name="p_sdate"
              rules={[
                { required: true, message: "출발 날짜는 필수 입력 사항입니다." },
              ]}>
              <DatePicker showTime={{
                format: 'HH:mm',
              }}
                format="YYYY-MM-DD HH:mm" size="large" bordered={false} />
            </Form.Item>
            <Form.Item
              name="p_edate"
              rules={[
                { required: true, message: "도착 날짜는 필수 입력 사항입니다." },
              ]}>
              <DatePicker showTime={{
                format: 'HH:mm',
              }}
                format="YYYY-MM-DD HH:mm" size="large" bordered={false} />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          name="count"
          rules={[
            { required: true, message: "수량은 필수 입력 사항입니다." },
          ]}
          initialValue={0}>
          <InputNumber size="large" bordered={false} min={0} placeholder="총 수량을 입력하세요" />
        </Form.Item>
        <Form.Item name="theme"
        className="borderNone"
          rules={[
            { required: true, message: "테마는 필수 입력 사항입니다." },
          ]}>
          <Radio.Group defaultValue="쇼핑" buttonStyle="solid" className="radio">
            <Radio.Button className="radio-btn" value="쇼핑">쇼핑</Radio.Button>
            <Radio.Button className="radio-btn" value="맛집탐방">맛집탐방</Radio.Button>
            <Radio.Button className="radio-btn" value="문화생활">문화생활</Radio.Button>
            <Radio.Button className="radio-btn" value="엑티비티">엑티비티</Radio.Button>
            <Radio.Button className="radio-btn" value="조용휴식">조용휴식</Radio.Button>
          </Radio.Group>
        </Form.Item>

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
