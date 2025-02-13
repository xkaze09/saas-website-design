"use client";
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion } from "framer-motion";


export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="section-title mt-5">A more effective way to track progress</h2>
        <p className="section-description mt-5">
              Effortlessly turn your ideas into a fully functional, responsive,
              SaaS website in just minutes.
        </p>
      </div>
      <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <motion.img src={pyramidImage.src} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" />
        <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={248} className="hidden md:block absolute bottom-24 -left-36" />
      </div>
    </div>
  </section>;
};
