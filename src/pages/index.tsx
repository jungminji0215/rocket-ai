import Image from 'next/image';

import ResultTableDecoLine from '@/components/result/ResultTableDecoLine';
import ResultDetail from '@/components/ResultDetail';
import ResultStory from '@/components/ResultStory';
import { fortuneResult } from '@/data/fortuneTable';

export default function Home() {
  const { name, birth } = fortuneResult;
  return (
    <div className="wrapper border border-gray-300">
      <div className="relative">
        <ResultStory />

        <div className="absolute top-[65.5%] left-0 w-full p-3">
          <div className="bg- bg- relative border-3 bg-[#f5f3ec]">
            <Image
              src="/table_deco_1.png"
              alt=""
              width={80}
              height={80}
              className="absolute top-5 left-1"
              aria-hidden="true"
              priority={true}
            />
            <Image
              src="/table_deco_2.png"
              alt=""
              width={80}
              height={80}
              className="absolute right-1"
              aria-hidden="true"
              priority={true}
            />
            <ResultTableDecoLine />

            <div className="flex flex-col gap-4 p-4">
              <div className="mt-6 flex flex-col items-center justify-center">
                <p className="text-lg">{`${name}`}님의 사주</p>
                <p className="text-xl">{`${birth}`}</p>
              </div>
              <ResultDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
