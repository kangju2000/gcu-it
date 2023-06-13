import { useState } from 'react';
import axios from 'axios';
import { Button, Spin, message } from 'antd';
import IndicatorModal from '@/components/domains/IndicatorModal';
import ExpectedRateResultBox from '@/components/domains/ExpectedRateResultBox';
import type { ExpectedRateType, IndicatorFormType } from '@/types';

const uData = {
  asset: 1000000,
  ticker: '005930.KS',
  start_date: '2021-01-01',
  buy_mfi_value: 30,
  sell_mfi_value: 70,
  buy_rsi_value: 30,
  sell_rsi_value: 70,
  buy_macd_value: 30,
  sell_macd_value: 70,
};

const rData = {
  profit: 100000,
  rate: 10,
};

const f = (value: any) => {
  if (value === undefined) return '';
  return Number(value);
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<IndicatorFormType | null>(null);
  const [resultData, setResultData] = useState<ExpectedRateType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = (values: IndicatorFormType) => {
    setIsModalOpen(false);
    setIsLoading(true);

    const data = {
      asset: Number(values.asset),
      ticker: values.ticker,
      start_date: values.start_date,
      buy_mfi_value: f(values.buy_mfi_value),
      sell_mfi_value: f(values.sell_mfi_value),
      buy_rsi_value: f(values.buy_rsi_value),
      sell_rsi_value: f(values.sell_rsi_value),
      buy_macd_value: f(values.buy_macd_value),
      sell_macd_value: f(values.sell_macd_value),
    } as const;

    console.log(data);

    axios
      .post('https://port-0-gcu-skill-server-koh2xlirkm67p.sel4.cloudtype.app/test', data)
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
      {contextHolder}
      <div className="mb-10 flex flex-col items-center gap-5">
        <h2 className="text-[24px]">
          보조지표를 활용하여
          <br />
          예상 수익률을 확인해보세요!
        </h2>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          예상 수익률 확인하기
        </Button>
      </div>
      <Spin spinning={isLoading}>
        <ExpectedRateResultBox userData={userData} resultData={resultData} />
      </Spin>

      <IndicatorModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  );
}
