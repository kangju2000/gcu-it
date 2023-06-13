import { AutoComplete, Button, DatePicker, Form, Input } from 'antd';
import { useState } from 'react';
import FlexCenter from '@/components/uis/FlexCenter';
import stockData from '@/db/stocks.json';
import axios from 'axios';

interface SimulatorFormProps {
  stocks: any;
  onFinish: (values: any) => void;
}

export default function SimulatorForm({ stocks, onFinish }: SimulatorFormProps) {
  const [options, setOptions] = useState<{ value: string }[]>(
    Object.keys(stocks).map((stock) => ({ value: stock }))
  );

  const [form] = Form.useForm();

  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : Object.keys(stocks)
            .filter((stock) => stock.includes(value))
            .map((stock) => ({ value: stock }))
    );
  };

  const handleFinish = () => {
    const data = {
      ticker: stockData[form.getFieldValue('stockName') as keyof typeof stockData]
        .toString()
        .padStart(9, '0'),
      stock_share: Number(form.getFieldValue('stock_share')),
      buy_date: form.getFieldValue('buy_date').format('YYYY-MM-DD') as string,
    };

    onFinish(data);
  };

  return (
    <Form form={form} className="mt-10" onFinish={handleFinish}>
      <Form.Item
        label="종목?"
        name="stockName"
        rules={[
          {
            required: true,
            message: '종목을 입력해주세요.',
          },
        ]}
      >
        <AutoComplete options={options} onSearch={handleSearch}>
          <Input placeholder="종목명" className="border-none" />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        label="몇 주?"
        name="stock_share"
        rules={[
          {
            required: true,
            message: '몇 주를 입력해주세요.',
          },
        ]}
      >
        <Input placeholder="0주" type="number" className="border-none" />
      </Form.Item>
      <Form.Item
        label="산 날짜?"
        name="buy_date"
        rules={[
          {
            required: true,
            message: '산 날짜를 입력해주세요.',
          },
        ]}
      >
        <DatePicker
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
      <FlexCenter className="mb-10">
        <Button type="primary" htmlType="submit">
          결과 확인하기
        </Button>
      </FlexCenter>
    </Form>
  );
}
