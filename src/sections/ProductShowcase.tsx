import productImage from '@/assets/product-image.png';
import Image from 'next/image';


export const ProductShowcase = () => {
  return <section>
    <div className="container">
      <div className="">Boost your productivity</div>
      <h2>A more effective way to track progress</h2>
      <p>
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes.
      </p>
      <Image src={productImage} alt="Product" className="w-full h-auto" />
    </div>
  </section>;
};
