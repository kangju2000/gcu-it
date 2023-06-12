import IndicatorModal from '@/components/domains/IndicatorModal';
import { Button, Card, Col, Row } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import type { expectedRateType, indicatorFormType } from '@/types';

// const data: [string, number, number, number, number, number, number][] = [
//   ['20230523', 68500, 68700, 68100, 68400, 8561643, 52.18],
//   ['20230524', 68100, 68700, 68000, 68500, 8192896, 52.2],
//   ['20230525', 69900, 70000, 68700, 68800, 14231160, 52.21],
//   ['20230526', 69800, 70400, 69500, 70300, 19549511, 52.34],
//   ['20230530', 71300, 72300, 71200, 72300, 27476897, 52.45],
//   ['20230531', 72400, 72500, 71000, 71400, 25666087, 52.48],
//   ['20230601', 70900, 71600, 70600, 70900, 14669296, 52.49],
//   ['20230602', 71700, 72200, 71600, 72200, 12161798, 52.54],
//   ['20230605', 72700, 72700, 71400, 71700, 12686829, 52.54],
//   ['20230607', 71300, 71600, 70800, 71200, 10883347, 52.54],
// ];

// type dataType = [string, number, number, number, number, number, number];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<expectedRateType>();

  const handleFinish = (values: indicatorFormType) => {
    setIsModalOpen(false);

    const data = {
      asset: Number(values.asset),
      ticker: values.ticker,
      start_date: values.start_date,
      buy_mfi_value: Number(values.buy_mfi_value) || '',
      sell_mfi_value: Number(values.sell_mfi_value) || '',
      buy_rsi_value: Number(values.buy_rsi_value) || '',
      sell_rsi_value: Number(values.sell_rsi_value) || '',
      buy_macd_value: Number(values.buy_macd_value) || '',
      sell_macd_value: Number(values.sell_macd_value) || '',
    };

    axios
      .post('https://port-0-gcu-skill-server-koh2xlirkm67p.sel4.cloudtype.app/test', data)
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div className='px-5 py-10'>
      <div className='mb-10 flex flex-col items-center gap-5'>
        <h2 className='text-[24px]'>
          보조지표를 활용하여
          <br />
          예상 수익률을 확인해보세요!
        </h2>
        <Button type='primary' onClick={() => setIsModalOpen(true)}>
          예상 수익률 확인하기
        </Button>
      </div>
      <div>
        {data && (
          <>
            <p>
              {Math.abs(data.profit)}원 {data.profit > 0 ? '이익' : '손실'}
            </p>
            <p>{data.rate}% 의 수익률이 예상됩니다!</p>
          </>
        )}
      </div>
      <IndicatorModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  );
}
