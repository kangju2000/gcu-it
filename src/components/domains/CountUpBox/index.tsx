import CountUp from 'react-countup';
import profitIcon from '@/assets/profit.svg';
import lossIcon from '@/assets/loss.svg';
import noChangeIcon from '@/assets/no_change.svg';

export default function CountUpBox({ rate }: { rate: number }) {
  const isProfit = rate > 0;

  return (
    <div className="flex items-center justify-center">
      {rate === 0 && (
        <>
          <img src={noChangeIcon} alt="arrow" width={14} height={14} />
          <CountUp end={Math.abs(rate)} suffix="%" className="text-[24px]" />
        </>
      )}
      {rate !== 0 && (
        <>
          <img src={isProfit ? profitIcon : lossIcon} alt="arrow" width={14} height={14} />
          <CountUp
            end={Math.abs(rate)}
            suffix="%"
            className={`text-[24px] ${isProfit ? 'text-red-500' : 'text-blue-500'}`}
          />
        </>
      )}
    </div>
  );
}
