import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <div className='h-screen w-screen bg-white'>{children}</div>;
}
