import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='h-full min-h-screen w-full bg-[#eee]'>
      <div className='mx-auto min-h-screen min-w-[360px] max-w-[448px] bg-white'>{children}</div>
    </div>
  );
}
