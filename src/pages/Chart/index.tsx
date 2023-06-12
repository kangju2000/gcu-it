import FlexCenter from '@/components/uis/FlexCenter';
import { AutoComplete, Button, DatePicker, Form, Input } from 'antd';
import ReactRotatingText from 'react-rotating-text';

const stocks = ['삼성전자', 'NAVER', '카카오', 'LG전자'];
const prices = ['100만원', '200만원', '300만원', '1000만원'];

export default function Chart() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-[24px]">
        만약 <ReactRotatingText items={stocks} />를
        <br />
        <ReactRotatingText items={prices} />에 샀더라면...
      </h1>

      <Form className="mt-10">
        <Form.Item label="종목" name="stock">
          <AutoComplete options={stocks.map((stock) => ({ value: stock }))}>
            <Input placeholder="종목명" />
          </AutoComplete>
        </Form.Item>
        <Form.Item label="가격" name="price">
          <Input placeholder="0" type="number" />
        </Form.Item>
        <Form.Item label="기간" name="date">
          <DatePicker />
        </Form.Item>
        <hr className="my-4" />
      </Form>
      <FlexCenter>
        <Button type="primary" className="mt-10">
          결과 확인하기
        </Button>
      </FlexCenter>
    </div>
  );
}
