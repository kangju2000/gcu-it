import Lottie from 'lottie-react';
import { Card, Typography } from 'antd';
import { useStockNameStore } from '@/store';
import { INDICATOR } from '@/constants';
import potato from '@/assets/lottie/potato.json';
import CountUpBox from '@/components/domains/CountUpBox';
import type { ExpectedRateType, IndicatorFormType } from '@/types';

interface ResultBoxProps {
  userData: IndicatorFormType | null;
  resultData: ExpectedRateType | null;
}

export default function ExpectedRateResultBox({ userData, resultData }: ResultBoxProps) {
  const { stockName } = useStockNameStore();
  const { Title, Text } = Typography;

  if (!userData || !resultData) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-lg bg-slate-200">
        <Lottie animationData={potato} loop={true} />
      </div>
    );
  }

  const isProfit = resultData.rate > 0;

  return (
    <div>
      <div className="relative mb-5 flex flex-col items-center justify-center border-b-[1px] border-solid border-b-gray-300">
        <Title level={3}>{stockName || '삼성전자'}</Title>
        <Text className="absolute bottom-0 right-0 text-[12px]">{userData.start_date} 기준</Text>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center">
        <Title level={4}>예상 수익률</Title>
        <CountUpBox rate={resultData.rate} />
        <div className="my-5 grid grid-cols-2">
          <p>투자자금</p>
          <span className="text-end font-bold">{userData.asset.toLocaleString('ko-KR')}원</span>
          <p>최종자산</p>
          <span className="text-end font-bold">
            {(userData.asset + resultData.profit).toLocaleString('ko-KR')}원
          </span>
        </div>

        <Text>
          <span className="font-bold">
            {Math.abs(resultData.profit).toLocaleString('ko-KR')}원{' '}
          </span>
          {isProfit ? '이익' : '손실'}
        </Text>
      </div>
      <div className="flex justify-center gap-5">
        <Card title="매수 조건" bordered={false} className="w-full">
          <p>
            RSI
            <span className="font-bold">
              {' '}
              {userData.buy_rsi_value || INDICATOR.DEFAULT_BUY_RSI}
            </span>
          </p>
          <p>
            MFI
            <span className="font-bold">
              {' '}
              {userData.buy_mfi_value || INDICATOR.DEFAULT_BUY_MFI}
            </span>
          </p>
          <p>
            MACD
            <span className="font-bold">
              {' '}
              {userData.buy_macd_value || INDICATOR.DEFAULT_BUY_MACD}
            </span>
          </p>
        </Card>
        <Card title="매도 조건" bordered={false} className="w-full">
          <p>
            RSI
            <span className="font-bold">
              {' '}
              {userData.sell_rsi_value || INDICATOR.DEFAULT_SELL_RSI}
            </span>
          </p>
          <p>
            MFI
            <span className="font-bold">
              {' '}
              {userData.sell_mfi_value || INDICATOR.DEFAULT_SELL_MFI}
            </span>
          </p>
          <p>
            MACD
            <span className="font-bold">
              {' '}
              {userData.sell_macd_value || INDICATOR.DEFAULT_SELL_MACD}
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
}
