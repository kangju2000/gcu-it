import { AutoComplete, DatePicker, Form, Input } from 'antd';

interface SimulatorFormProps {
  stocks: string[];
}

export default function SimulatorForm({ stocks }: SimulatorFormProps) {
  return (
    <Form className="mt-10">
      <Form.Item label="종목?" name="stock">
        <AutoComplete options={stocks.map((stock) => ({ value: stock }))}>
          <Input placeholder="종목명" className="border-none" />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="몇 주?" name="price">
        <Input placeholder="0주" type="number" className="border-none" />
      </Form.Item>
      <Form.Item label="산 날짜?" name="date">
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
    </Form>
  );
}
