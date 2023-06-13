import { useState } from 'react';
import { Spin, message } from 'antd';
import ReactRotatingText from 'react-rotating-text';
import SimulatorResultBox from '@/components/domains/SimulatorResultBox';
import SimulatorForm from '@/components/domains/SimulatorForm';
import stockData from '@/db/stocks.json';
import axios from 'axios';
import type { SimulationRequestType, SimulationResultType } from '@/types';

const stocks = Object.keys(stockData);
const prices = ['100', '777', '1', '9999', '1234', '1000', '10000'];

export default function Simulator() {
  const [userData, setUserData] = useState<SimulationRequestType | null>(null);
  const [resultData, setResultData] = useState<SimulationResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = (data: SimulationRequestType) => {
    setIsLoading(true);

    axios
      .post('https://port-0-gcu-skill-server-koh2xlirkm67p.sel4.cloudtype.app/how', data)
      .then((res) => {
        setUserData(data);
        setResultData(res.data);
      })
      .catch((err) => {
        messageApi.open({
          type: 'error',
          content: '오류가 발생했어요!',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="px-5 py-10">
      <h1 className="text-[24px]">
        만약 <ReactRotatingText items={stocks} />
        <br />
        <ReactRotatingText items={prices} />
        주를 샀더라면...
      </h1>
      <SimulatorForm stocks={stockData} onFinish={handleFinish} />
      <Spin spinning={isLoading}>
        <SimulatorResultBox resultData={resultData} userData={userData} />
      </Spin>
    </div>
  );
}
