import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYouTube from '@/assets/social-youtube.svg';



export const Footer = () => {
  return <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
    <div className="container">
      <div className="inline-flex relative">
        <Image src={logo} alt="SaaS Logo" height={40} />
      </div>
      <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
      </nav>
      <div className="social-icons">
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        <SocialPin />
        <SocialYouTube />
      </div>
      <p>$copy; 2024 Your Company, Inc. All rights reserved.</p>
    </div>
  </footer>;
};
