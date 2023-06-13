import { AutoComplete, Button, Col, DatePicker, Form, Input, Row, theme } from 'antd';
import type { IndicatorFormType, StockType } from '@/types';
import { useStockNameStore } from '@/store';
import { INDICATOR } from '@/constants';

interface IndicatorFormProps {
  stocks: StockType[];
  onFinish: (values: IndicatorFormType) => void;
}

export default function IndicatorForm({ stocks, onFinish }: IndicatorFormProps) {
  const { setStockName } = useStockNameStore();

  const { token } = theme.useToken();
  const [form] = Form.useForm();

  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

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

  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={() => {
        setStockName(form.getFieldValue('stockName'));

        onFinish({
          ...form.getFieldsValue([
            'asset',
            'start_date',
            'buy_mfi_value',
            'sell_mfi_value',
            'buy_rsi_value',
            'sell_rsi_value',
            'buy_macd_value',
            'sell_macd_value',
          ]),
          ticker: stocks.find((stock) => stock.name === form.getFieldValue('stockName'))?.ticker,
          start_date: form.getFieldValue('start_date').format('YYYY-MM-DD'),
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
        <AutoComplete options={stocks.map((stock) => ({ value: stock.name }))}>
          <Input placeholder="종목명" />
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
        label="기간"
        rules={[
          {
            required: true,
            message: '기간을 선택해주세요.',
          },
        ]}
        name="start_date"
        required
      >
        <DatePicker />
      </Form.Item>
      <hr className="my-4" />
      <Row gutter={24}>
        {buyOrSell.map((buyOrSell) => (
          <Col key={buyOrSell.label} span={12}>
            <Form.Item label={buyOrSell.label}>
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
