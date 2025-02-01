import productImage from '@/assets/product-image.png';
import Image from 'next/image';


export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
    <div className="container">
      <div className="flex justify-center">
        <div className="tag">Boost your productivity</div>
      </div>
      <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">A more effective way to track progress</h2>
      <p className="text-center">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes.
      </p>
      <Image src={productImage} alt="Product" className="" />
    </div>
  </section>;
};
