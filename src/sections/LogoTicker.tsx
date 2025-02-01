import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return <div>
    <div className="container">
      <div className="">
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
        <Image src={acmeLogo} alt="Acme Logo" />
      </div>
    </div>
  </div>;
};
