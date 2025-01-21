import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center py-3 bg-black text-white text-small">
          <div className="inline-flex gap-1 items-center">
            <p>Get started for free</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"></ArrowRight>
          </div>
      </div>
      <div>
          <Image src={Logo} alt="Logo" height={40} width={40} />
      </div>
    </header>
  );
};
