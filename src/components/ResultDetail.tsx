import Image from 'next/image';

import RowSubTitle from '@/components/result/RowSubTitle';
import RowTitle from '@/components/result/RowTitle';
import SubResult from '@/components/result/SubResult';
import TitleTd from '@/components/result/TitleTd';
import { fortuneResult } from '@/data/fortuneTable';

const columnTitle = ['時', '日', '月', '年'];

export default function ResultDetail() {
  const { name, resultDetails } = fortuneResult;

  return (
    <table
      className="mb-5 border-r-2 border-b-2 text-center"
      aria-label={`${name}님의 사주팔자 해석 표`}
    >
      <caption className="sr-only">
        {name}님의 사주팔자를 분석한 표입니다.
      </caption>

      <thead>
        <tr className="border-b-2">
          <th scope="col " className="border-r-2"></th>
          {columnTitle.map((text) => (
            <th key={text} scope="col" className="border-r p-2 text-2xl">
              {text}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {resultDetails.map((result) => {
          const isImageRow = result.key === 'heaven' || result.key === 'earth';

          if (isImageRow) {
            return (
              <tr key={result.key} className="border-b-2">
                <TitleTd>
                  <RowTitle>{result.title}</RowTitle>
                  <RowSubTitle>{result.subTitle}</RowSubTitle>
                </TitleTd>
                {(result.results as string[]).map((r, index) => (
                  <td key={index} className="border-r border-b-2 p-2">
                    <Image src={r} alt="" width={80} height={80} />
                  </td>
                ))}
              </tr>
            );
          } else {
            return (
              <tr key={result.key} className="border-r-2">
                <TitleTd>
                  <RowTitle>十星</RowTitle>
                  <RowSubTitle>십성</RowSubTitle>
                </TitleTd>
                {(result.results as { title: string; sub: string }[]).map(
                  (r, index) => (
                    <td key={index} className="border-r border-b-2 p-2">
                      <p>{r.title}</p>
                      <SubResult>{r.sub}</SubResult>
                    </td>
                  ),
                )}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
