import { ReactNode } from 'react';

export default function RowTitle({ children }: { children: ReactNode }) {
  return <p className="text-sm font-bold whitespace-nowrap">({children})</p>;
}
