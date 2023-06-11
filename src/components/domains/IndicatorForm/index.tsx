import { Button, Col, DatePicker, Form, Input, Row, theme } from 'antd';

interface IndicatorFormProps {
  onFinish: (values: any) => void;
}

export default function IndicatorForm({ onFinish }: IndicatorFormProps) {
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
      label: '구매',
    },
    {
      name: 'sell',
      label: '판매',
    },
  ];

  return (
    <Form form={form} name='advanced_search' style={formStyle} onFinish={onFinish}>
      <Form.Item
        label='종목'
        rules={[
          {
            required: true,
            message: '종목을 입력해주세요.',
          },
        ]}
        name='stock'
        required
      >
        <Input placeholder='종목명' />
      </Form.Item>
      <Form.Item
        label='가격'
        rules={[
          {
            required: true,
            message: '가격을 입력해주세요.',
          },
        ]}
        name='price'
        required
      >
        <Input placeholder='0' type='number' />
      </Form.Item>
      <Form.Item
        label='기간'
        rules={[
          {
            required: true,
            message: '기간을 선택해주세요.',
          },
        ]}
        name='date'
        required
      >
        <DatePicker />
      </Form.Item>
      <hr className='my-4' />
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
                  <Input placeholder='0' type='number' />
                </Form.Item>
              ))}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <div className='text-right'>
        <Button type='primary' htmlType='submit'>
          결과
        </Button>
      </div>
    </Form>
  );
}
