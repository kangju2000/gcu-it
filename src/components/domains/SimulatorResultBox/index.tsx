import CountUp from 'react-countup';

interface SimulatorResultBoxProps {
  profit: number | null;
}

export default function SimulatorResultBox({ profit }: SimulatorResultBoxProps) {
  if (profit === null) {
    return (
      <div className="text-center">
        <h2 className="mb-5 text-[12px]">결과를 확인해보세요!</h2>
      </div>
    );
  }

  const isProfit = profit > 0;

  return (
    <div className="text-center">
      <h2 className="mb-5 text-[12px]">
        <span className="text-[36px]">{profit.toLocaleString('ko-KR')}원</span>{' '}
        {isProfit ? '벌었을텐데...' : '아꼈다 ㄱㅇㄷ'}
      </h2>
      <div className={`flex flex-col items-start gap-2 ${!isProfit && 'hidden'}`}>
        <p>
          국밥 <CountUp end={100} />
          그릇 <span className="text-[8px] text-gray-400">1그릇 당 8,000원 기준</span>
        </p>
        <p>
          치킨 <CountUp end={100} />
          마리 <span className="text-[8px] text-gray-400">1마리 당 18,000원 기준</span>
        </p>
        <p>
          피자 <CountUp end={100} />판{' '}
          <span className="text-[8px] text-gray-400">1판 당 20,000원 기준</span>
        </p>
        <p>
          커피 <CountUp end={100} />잔{' '}
          <span className="text-[8px] text-gray-400">1잔 당 4,500원 기준</span>
        </p>
      </div>
    </div>
  );
}
