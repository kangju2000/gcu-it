import FlexCenter from '@/components/uis/FlexCenter';
import { useDarkmodetore } from '@/store';
import { Link } from 'react-router-dom';
import gachon from '@/assets/gachon.svg';
import sun from '@/assets/sun.svg';
import moon from '@/assets/moon.svg';

export default function Header() {
  const { darkmode, setDarkmode } = useDarkmodetore();

  return (
    <div className="flex items-center justify-between px-5 py-4">
      <Link to="/">
        <img src={gachon} alt="가천대학교" className="h-[24px] w-[24px]" />
      </Link>
      <FlexCenter className="gap-2">
        <FlexCenter className="gap-5 text-[14px]">
          <Link to="/">
            <p>예상 수익률</p>
          </Link>
          <Link to="/라고할때살걸">
            <p>라고 할 때 살걸</p>
          </Link>
        </FlexCenter>
        <div className="cursor-pointer">
          <img
            src={darkmode ? sun : moon}
            alt="다크모드"
            onClick={() => setDarkmode(!darkmode)}
            className={`${darkmode ? 'invert filter' : ''}`}
          />
        </div>
      </FlexCenter>
    </div>
  );
}
