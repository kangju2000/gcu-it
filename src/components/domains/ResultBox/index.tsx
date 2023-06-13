import Lottie from 'lottie-react';
import { Card, Typography } from 'antd';
import { useStockNameStore } from '@/store';
import { INDICATOR } from '@/constants';
import potato from '@/assets/lottie/potato.json';
import type { ExpectedRateType, IndicatorFormType } from '@/types';

interface ResultBoxProps {
  userData: IndicatorFormType | null;
  resultData: ExpectedRateType | null;
}

export default function ResultBox({ userData, resultData }: ResultBoxProps) {
  const { stockName } = useStockNameStore();
  const { Title, Text } = Typography;

  if (!userData || !resultData) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-lg bg-slate-200">
        <Lottie animationData={potato} loop={true} />
      </div>
    );
  }

  return (
    <div>
      <div className="relative mb-5 flex flex-col items-center justify-center">
        <Title level={3}>{stockName}</Title>
        <Text className="absolute bottom-0 right-0 text-[12px]">{userData.start_date} 기준</Text>
      </div>
      <Card title="예상 결과" bordered={false} className="mb-5">
        <p>
          수익률<span className="font-bold"> {resultData.rate}</span>%
        </p>
        <p>
          <span className="font-bold">
            {Math.abs(resultData.profit).toLocaleString('ko-KR')}원{' '}
          </span>
          {resultData.profit > 0 ? '이익' : '손실'}
        </p>
      </Card>
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
