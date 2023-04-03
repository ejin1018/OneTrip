import { API_URL } from "./config/constants";
import { PictureOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Upload } from "antd";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const ReviewCreate = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const onFinish = (val) => {
    axios
      .post(`${API_URL}/reviews`, {
        user_name: val.user_name,
        r_title: val.r_title,
        r_text: val.r_text,
        r_area: val.r_area,
        r_imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        navigate("/review", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생하였습니다`);
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
    }
  };

  return (
    <>
      <Form className="FormWrap" onFinish={onFinish}>
        <Form.Item className="borderNone" name="files" valuePropName="image">
          <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="리뷰이미지" />
            ) : (
              <>
                <div id="upload-img-placeholder">
                  <PictureOutlined />
                  <p className="img-text">리뷰이미지를 업로드 해주세요</p>
                </div>
              </>
            )}
          </Upload>
        </Form.Item>

        <Form.Item name="user_name" rules={[{ required: true, message: "닉네임은 필수 입력 사항입니다." }]}>
          <Input size="large" bordered={false} prefix="닉네임" placeholder="등록하실 닉네임을 입력하세요" />
        </Form.Item>
        <Form.Item name="r_area" rules={[{ required: true, message: "지역은 필수 입력 사항입니다." }]}>
          <Input size="large" bordered={false} prefix="지역" placeholder="등록하실 지역을 입력하세요" />
        </Form.Item>
        <Form.Item name="r_title" rules={[{ required: true, message: "제목은 필수 입력 사항입니다." }]}>
          <Input size="large" bordered={false} prefix="제목" placeholder="등록하실 제목을 입력하세요" />
        </Form.Item>
        <Form.Item name="r_text" rules={[{ required: true, message: "내용은 필수 입력 사항입니다." }]}>
          <TextArea showCount maxLength={50} size="large" bordered={false} prefix="내용" placeholder="등록하실 내용을 입력하세요" />
        </Form.Item>

        <div className="submit">
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit">
              리뷰 등록하기
            </Button>
          </Form.Item>
          <Link size="large" to={"/review"} className="cancel">
            취소
          </Link>
        </div>
      </Form>
    </>
  );
};
export default ReviewCreate;
