/* eslint-disable react-hooks/rules-of-hooks */
// Import the necessary libraries
"use client";
import React, { useEffect, useRef, useState } from 'react';


function page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
     <>
      {/* Services Head Start */}
      <section className="h-screen text-black flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <h1 className='text-4xl font-semibold'>Our Services</h1>
          <p className='px-12 text-center text-lg font-light'>Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non</p>
        </div>
      </section>
      {/* Services Head End */}

      {/* Services Intro Start */}
      {/* <section className={`md:h-[900px] md:mb-0 mb-9 bg-gradient-to-r from-[#F1F1F4]  to-[#DEDDEA]`}> */}
      <section className={`md:h-[900px] md:mb-0 mb-9 bg-gradient-to-r from-[#F1F1F4]  to-[#DEDDEA]`}>
        <div className="flex flex-col items-center md:items-strech gap-8 text-black">
          <h4 className='text-black font-semibold text-center'>Our Services</h4>
          <h1 className='text-4xl text-[#020329] font-semibold text-center'>With Quality Services For You</h1>
          <div className="flex flex-col justify-left gap-6">
            <div className="flex md:flex-row flex-col gap-6 w-full md:ml-[200px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>Mukham</h3>
                <img className='h-[300px]' src="/mukham-logo.svg" alt="" />
                <p className='font-light text-xs text-center'>Application to simplfy the overall process of marking attendance</p>
              </div>
              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>MauthN</h3>
                <img className='h-[300px]' src="/m-auth.svg" alt="" />
                <p className='font-light text-xs text-center mt-[15px]'>Admire the authentication</p>
                <p className='font-light text-xs text-center'>Passwordless authentication to remove risk of cyber attacks</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-6 md:ml-[500px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>mXdr</h3>
                <img className='h-[300px]' src="/mxdr.svg" alt="" />
                <p className='font-light text-xs text-center'>Extended detection and response</p>
              </div>
              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services ">
                <h3 className='text-xl font-semibold mt-9'>M-Isolate</h3>
                <img className='h-[300px]' src="/m-isolate.svg" alt="" />
                <p className='font-light text-xs text-center'>Disposable Workspaces & <br /> Safest Web Browser in the World!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Intro End */}

      {/* Services Anything Start */}
      {/* <section className="h-[350px] w-full flex shadow-inset items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-[#E2F9F7] mb-9"> */}
      <section className="h-[350px] w-full flex shadow-inset items-center justify-center  mb-9">
        <div className="flex flex-col items-center justify-center gap-7 text-black">
          <h1 className='font-semibold text-center text-3xl'>Anything to Discuss with Us?</h1>
          <p className='font-light text-center'>Ready to explore the future of security? Lets discuss your biometric solutions. Whether you have inquiries or <br />seek collaboration opportunities, were here to elevate your security standards together.</p>
          <button className='text-sm text-white bg-[#423359] px-14 py-4'>Contact Us</button>
        </div>
      </section>
      {/* Services Anything End */}


      {/* Services Testimonials Start */}
      <section ref={sectionRef} className={`md:h-screen ${isVisible ? 'animation' : ''}`}>
        <div className="flex md:flex-row flex-col items-center justify-center gap-[150px]">
          <div className="md:w-[450px] w-[300px] md:h-[480px] h-[330px] bg-[#ccc]"></div>
          <div className="md:w-[500px] w-full text-black p-7">
            <h4 className='font-semibold text-sm text-black'>Testimonials</h4>
            <h1 className='text-4xl my-2 font-semibold '>Hello World, Welcome to <br /> <span className="text-[#FA975C]">Digital Fortress</span></h1>
            
            <p className='font-light text-xs my-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non. Nec aliquam dui morbi viverra. Arcu viverra augue tincidunt massa quam bibendum. <br /><br />Pharetra, in elementum mattis duis felis. In malesuada nisi, tincidunt ultrices tempus in tellus at sed. Rutrum est, lacus orci id convallis nibh ac. Justo dignissim eget cras aliquam, eu duis consectetur. Nunc quam sed tellus neque. Vitae mi magna gravida pretium dui. Porttitor ac eget urna egestas faucibus adipiscing </p>

            <p className='font-semibold text-base'>Name-Position</p>
          
          </div>
        </div>
      </section>
      {/* Services Testimonials End */}


      {/* <section className='h-screen'>
      <div className="flex h-full flex-col gap-6 items-center justify-center text-black">
        <img className='md:w-full w-[350px] ' src="/404.svg" alt="" />
        <h1 className='text-4xl font-semibold'>Page not found</h1>
        <p className='text-xxl font-semibold'>OOPS...Try Again :/</p>
        <a href="/" className="bg-[#4E3F63] p-6 text-white font-semibold">Home Page</a>
      </div>
      </section> */}
    </>
  );
}

// Export the Services component
export default page;
