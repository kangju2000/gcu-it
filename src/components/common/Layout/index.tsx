import type { PropsWithChildren } from 'react';
import Header from '@/components/common/Header';
import { ConfigProvider, theme } from 'antd';
import { useDarkmodetore } from '@/store';

export default function Layout({ children }: PropsWithChildren) {
  const { darkmode } = useDarkmodetore();

  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <ConfigProvider
      theme={{
        algorithm: darkmode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <div className="h-full min-h-screen w-full bg-[#eee]">
        <div
          className={`mx-auto min-h-screen min-w-[360px] max-w-[448px] transition-all ${
            darkmode ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <Header />
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}
