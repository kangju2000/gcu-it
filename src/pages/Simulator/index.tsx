import FlexCenter from '@/components/uis/FlexCenter';
import { AutoComplete, Button, DatePicker, Form, Input } from 'antd';
import ReactRotatingText from 'react-rotating-text';

const stocks = ['삼성전자', 'NAVER', '카카오', 'LG전자'];
const prices = ['100만원', '200만원', '300만원', '1000만원'];

export default function Simulator() {
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
            <Input placeholder="종목명" className="border-none" />
          </AutoComplete>
        </Form.Item>
        <Form.Item label="몇 주?" name="price">
          <Input placeholder="0주" type="number" className="border-none" />
        </Form.Item>
        <Form.Item label="산 날짜" name="date">
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={(current) =>
              current.valueOf() > Date.now() - 40 * 24 * 60 * 60 * 1000 ||
              current.day() === 0 ||
              current.day() === 6
            }
            className="border-none transition-colors duration-200"
            suffixIcon={null}
            placeholder="XXXX-XX-XX"
            inputReadOnly
          />
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
