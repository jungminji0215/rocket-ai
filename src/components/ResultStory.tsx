import Image from 'next/image';

import { fortuneResult } from '@/data/fortuneTable';

export default function ResultStory() {
  const { name } = fortuneResult;

  return (
    <>
      <Image
        src="/result_background.png"
        alt="스토리 배경"
        width={750}
        height={4162}
        priority={true}
      />

      <div className="absolute top-[30.8%] left-[8%] flex h-[5%] w-[55%] flex-col items-center justify-center text-lg">
        <p>이제 본격적으로</p>
        <p>{`${name}`}님의 사주팔자를</p>
        <p>분석해볼 차례네요.</p>
      </div>
      <div className="absolute top-[48%] left-[10%] flex h-[5%] w-[55%] flex-col items-center justify-center text-lg">
        <p>제가 {`${name}`}님의 사주를</p>
        <p>보기 쉽게 표로 정리했어요</p>
      </div>
    </>
  );
}
