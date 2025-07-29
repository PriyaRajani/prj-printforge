import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <section className="flex flex-col wrap justify-center  p-[40px] lg:gap-25 lg:flex-row">
        <Image
          src="/about_image.png"
          alt="img"
          width={627}
          height={627}
          className="p-3"
        />
        <div className="flex flex-col gap-3 md:gap-5 lg:max-w-[600px] p-3">
          <p className="uppercase text-sm md:text-xl text-gray-600">
            About printforge
          </p>
          <h1 className="text-4xl font-bold md:text-6xl pr-3 md:leading-17 ">
            Empowering makers worldwide
          </h1>
          <p className="font-[400] text-lg md:text-[28px]">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className="font-[400] text-lg md:text-[28px]">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>
      <hr className="text-gray-300 " />
      <section className="p-5 flex flex-col gap-12 my-10  lg:flex-row lg:gap-[1px]">
        <div>
          <div className="flex gap-1.5 items-center ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 22L16 29L28 22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 16L16 23L28 16"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 10L16 17L28 10L16 3L4 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-bold text-3xl">100K+ Models</h1>
          </div>
          <p className="text-xl font-[400] p-2">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>

        <div className="lg:border-l lg:border-black lg:pl-4">
          <div className="flex gap-1.5 items-center ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M4 16H28"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 27.6752C18.7614 27.6752 21 22.4481 21 16.0002C21 9.55227 18.7614 4.3252 16 4.3252C13.2386 4.3252 11 9.55227 11 16.0002C11 22.4481 13.2386 27.6752 16 27.6752Z"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
            <h1 className="font-bold text-3xl">Active Community</h1>
          </div>
          <p className="text-xl font-[400] p-2">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </div>

        <div className="lg:border-l lg:border-black lg:pl-4">
          <div className="flex gap-1.5 items-center ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 27V6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 21.0001C13 15.0001 19 27.0001 27 21.0001V6.00012C19 12.0001 13 0.000117183 5 6.00012"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h1 className="font-bold text-3xl">Free to Use</h1>
          </div>
          <p className="text-xl font-[400] p-2">
            Most models are free to download, with optional premium features for power users.
          </p>
        </div>
      </section>
       <hr className="text-gray-300 " />
      <section className="px-5 flex flex-col gap-5 py-2 lg:px-10 lg:ml-50 lg:mr-50">
        <h1 className="font-bold text-[40px]">Our vision</h1>
        
        <p className="text-2xl">
          At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype,
          and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing
          of knowledge and creativity that pushes the boundaries of what&apos;s possible with 3D printing.
        </p>
        <div className="border-t-1 border-gray-600 w-60 align-middle my-5 ml-auto mr-auto"></div>
        <p className="text-2xl">
          Whether you&apos;re a hobbyist looking for your next weekend project, an educator
          seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the
          tools and community to support your journey in 3D printing.
        </p>
        <Image src={'/about_footer_image.png'}  width={140} height={140} alt="img" className="hidden lg:block ml-auto mr-auto py-1"/>
      </section>
    </main>
  );
};

export default AboutPage;
