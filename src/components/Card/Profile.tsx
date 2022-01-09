import Image from 'next/image';
import ButtonSNS from '~/components/Button/SNS';

const CardProfile = () => {
  return (
    <div className="relative px-5 bg-gray-700 rounded-3xl">
      <div className="absolute left-0 -top-10 px-5 w-full">
        <div className="flex justify-between items-center">
          <div className="border-4 border-gray-700 rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/images/profile.webp" width={72} height={72} />
          </div>
          <ul className="flex justify-center space-x-4">
            <li>
              <ButtonSNS href="https://twitter.com/usucode" isExternalLink />
            </li>
            <li>
              <ButtonSNS href="https://note.com/usucode" isExternalLink />
            </li>
            <li>
              <ButtonSNS href="https://github.com/usucode" isExternalLink />
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-10 pb-4">
        <p className="text-white font-bold">Yusuke Akiyama</p>
        <p className="mt-2 text-white text-sm">
          建設 x IT領域のアーキベースという会社のエンジニアしてます。
          <br />
          函館からフルリモートで開発してます。
          <br />
          UX戦略、UI/UXデザインと英語を勉強中。
        </p>
      </div>
    </div>
  );
};

export default CardProfile;
