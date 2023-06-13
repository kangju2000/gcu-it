import FlexCenter from '@/components/uis/FlexCenter';
import { useDarkmodetore } from '@/store';
import { Link } from 'react-router-dom';

export default function Header() {
  const { darkmode, setDarkmode } = useDarkmodetore();

  return (
    <div className="flex items-center justify-between px-5 py-4">
      <Link to="/">
        <img src="/assets/gachon.svg" alt="가천대학교" className="h-[24px] w-[24px]" />
      </Link>
      <FlexCenter className="gap-5">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/chart">
          <p>chart</p>
        </Link>

        <FlexCenter className="cursor-pointer">
          <img
            src={darkmode ? '/assets/moon.svg' : '/assets/sun.svg'}
            alt="다크모드"
            onClick={() => setDarkmode(!darkmode)}
            className={`${darkmode ? 'invert filter' : ''}`}
          />
        </FlexCenter>
      </FlexCenter>
    </div>
  );
}
