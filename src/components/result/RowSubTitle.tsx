import { ReactNode } from 'react';

export default function RowSubTitle({ children }: { children: ReactNode }) {
  return <p className="text-xs whitespace-nowrap">({children})</p>;
}
