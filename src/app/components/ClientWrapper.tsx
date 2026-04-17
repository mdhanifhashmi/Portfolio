'use client';

import { ReactNode } from 'react';
import Loader from './Loader';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
