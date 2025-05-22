import { ReactNode } from 'react';

export default function TitleTd({ children }: { children: ReactNode }) {
  return (
    <td scope="row" className="border-r-2 border-b-2 p-2">
      {children}
    </td>
  );
}
