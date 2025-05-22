import { ReactNode } from 'react';

export default function SubResult({ children }: { children: ReactNode }) {
  return <p className="text-sm">({children})</p>;
}
