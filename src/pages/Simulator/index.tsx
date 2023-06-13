import { AutoComplete, Button, DatePicker, Form, Input, Spin } from 'antd';
import ReactRotatingText from 'react-rotating-text';
import FlexCenter from '@/components/uis/FlexCenter';
import SimulatorResultBox from '@/components/domains/SimulatorResultBox';
import SimulatorForm from '@/components/domains/SimulatorForm';
import { useState } from 'react';

const stocks = ['삼성전자', 'NAVER', '카카오', 'LG전자'];
const prices = ['100만원', '200만원', '300만원', '1000만원'];

export default function Simulator() {
  const [isLoading, setIsLoading] = useState(false);
  const profit = null;

  return (
    <div className="px-5 py-10">
      <h1 className="text-[24px]">
        만약 <ReactRotatingText items={stocks} />를
        <br />
        <ReactRotatingText items={prices} />에 샀더라면...
      </h1>

      <SimulatorForm stocks={stocks} />
      <FlexCenter className="mb-10">
        <Button type="primary">결과 확인하기</Button>
      </FlexCenter>
      <Spin spinning={isLoading}>
        <SimulatorResultBox profit={profit} />
      </Spin>
    </div>
  );
}
