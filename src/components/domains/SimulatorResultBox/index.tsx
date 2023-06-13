import CountUp from 'react-countup';
import type { SimulationRequestType, SimulationResultType } from '@/types';
import CountUpBox from '@/components/domains/CountUpBox';
import { PRICE } from '@/constants';
import { Card } from 'antd';

interface SimulatorResultBoxProps {
  resultData: SimulationResultType | null;
  userData: SimulationRequestType | null;
}

export default function SimulatorResultBox({ resultData, userData }: SimulatorResultBoxProps) {
  if (resultData === null || userData === null) {
    return (
      <div className="text-center">
        <h2 className="mb-5 text-[12px]">결과를 확인해보세요!</h2>
      </div>
    );
  }

  const isProfit = resultData.profit > 0;

  return (
    <div className="text-center">
      <CountUpBox rate={resultData.rate} />
      <h2 className="mb-5 text-[14px]">
        <span className={`text-[36px] ${isProfit ? 'text-red-500' : 'text-blue-500'}`}>
          {Math.abs(resultData.profit).toLocaleString('ko-KR')}원
        </span>
        {isProfit ? '벌었을텐데...' : '잃을 뻔 했는데...휴'}
      </h2>
      <div className="items- mb-10 flex flex-col gap-2">
        <p>
          국밥 <CountUp end={Math.abs(Math.floor(resultData.profit / PRICE.GUKBAP))} />
          그릇 {!isProfit && '땅바닥에 버림'}
          <span className="text-[8px] text-gray-400">
            {' '}
            1그릇 당 {PRICE.GUKBAP.toLocaleString('ko-KR')}원 기준
          </span>
        </p>
        <p>
          치킨 <CountUp end={Math.abs(Math.floor(resultData.profit / PRICE.CHICKEN))} />
          마리 {!isProfit && '목숨 살림'}
          <span className="text-[8px] text-gray-400">
            {' '}
            BBQ 1마리 당 {PRICE.CHICKEN.toLocaleString('ko-KR')}원 기준
          </span>
        </p>
        <p>
          커피 <CountUp end={Math.abs(Math.floor(resultData.profit / PRICE.COFFEE))} />잔{' '}
          {!isProfit && '흘림'}
          <span className="text-[8px] text-gray-400">
            {' '}
            1잔 당 {PRICE.COFFEE.toLocaleString('ko-KR')}원 기준
          </span>
        </p>
      </div>
      <div className="flex justify-center gap-5">
        <Card title="한 주당 가격 변화" className="w-full">
          {resultData.past_price.toLocaleString('ko-KR')}원<p>-&gt;</p>
          {resultData.now_price.toLocaleString('ko-KR')}원
        </Card>
        <Card title="자산 변화" className="w-full">
          {(resultData.past_price * userData.stock_share).toLocaleString('ko-KR')}원<p>-&gt;</p>
          {(resultData.now_price * userData.stock_share).toLocaleString('ko-KR')}원
        </Card>
      </div>
    </div>
  );
}
