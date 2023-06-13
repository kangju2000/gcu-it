import { AutoComplete, Button, Col, DatePicker, Form, Input, Row } from 'antd';
import { useStockNameStore } from '@/store';
import { INDICATOR } from '@/constants';
import { useState } from 'react';
import type { IndicatorFormType } from '@/types';

interface IndicatorFormProps {
  stocks: any;
  onFinish: (values: IndicatorFormType) => void;
}

export default function IndicatorForm({ stocks, onFinish }: IndicatorFormProps) {
  const [options, setOptions] = useState<{ value: string }[]>(
    Object.keys(stocks).map((stock) => ({ value: stock }))
  );

  const { setStockName } = useStockNameStore();

  const [form] = Form.useForm();

  const indicators = [
    {
      name: 'rsi',
      label: 'RSI',
    },
    {
      name: 'mfi',
      label: 'MFI',
    },
    {
      name: 'macd',
      label: 'MACD',
    },
  ];

  const buyOrSell = [
    {
      name: 'buy',
      label: '매수',
    },
    {
      name: 'sell',
      label: '매도',
    },
  ];

  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : Object.keys(stocks)
            .filter((stock) => stock.includes(value))
            .map((stock) => ({ value: stock }))
    );
  };

  return (
    <Form
      form={form}
      className="p-4"
      onFinish={() => {
        setStockName(form.getFieldValue('stockName'));

        onFinish({
          ...form.getFieldsValue([
            'asset',
            'buy_mfi_value',
            'sell_mfi_value',
            'buy_rsi_value',
            'sell_rsi_value',
            'buy_macd_value',
            'sell_macd_value',
          ]),
          start_date: form.getFieldValue('start_date').format('YYYY-MM-DD'),
          ticker: stocks[form.getFieldValue('stockName')].toString().padStart(9, '0'),
        });
      }}
    >
      <Form.Item
        label="종목"
        rules={[
          {
            required: true,
            message: '종목을 입력해주세요.',
          },
        ]}
        name="stockName"
        required
      >
        <AutoComplete options={options} onSearch={handleSearch}>
          <Input placeholder="종목명 ex) 삼성전자" />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        label="가격"
        rules={[
          {
            required: true,
            message: '가격을 입력해주세요.',
          },
        ]}
        name="asset"
        required
      >
        <Input placeholder="0" type="number" />
      </Form.Item>
      <Form.Item
        label="시작 일시"
        rules={[
          {
            required: true,
            message: '시작 일시를 선택해주세요.',
          },
        ]}
        name="start_date"
        required
      >
        <DatePicker
          disabledDate={(current) =>
            current.valueOf() > Date.now() - 40 * 24 * 60 * 60 * 1000 ||
            current.day() === 0 ||
            current.day() === 6
          }
          placeholder="XXXX-XX-XX"
          inputReadOnly
        />
      </Form.Item>
      <hr className="my-4" />
      <Row gutter={24}>
        {buyOrSell.map((buyOrSell) => (
          <Col key={buyOrSell.label} span={12} className="text-center">
            <h2 className="mb-5 text-[18px]">{buyOrSell.label} 조건</h2>
            <Form.Item>
              {indicators.map((indicator) => (
                <Form.Item
                  key={`${buyOrSell.name}_${indicator.name}`}
                  name={`${buyOrSell.name}_${indicator.name}_value`}
                  label={indicator.label}
                >
                  <Input
                    placeholder={String(
                      INDICATOR[
                        `DEFAULT_${buyOrSell.name.toUpperCase()}_${
                          indicator.label
                        }` as keyof typeof INDICATOR
                      ]
                    )}
                    type="number"
                  />
                </Form.Item>
              ))}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <div className="text-right">
        <Button type="primary" htmlType="submit">
          결과
        </Button>
      </div>
    </Form>
  );
}
