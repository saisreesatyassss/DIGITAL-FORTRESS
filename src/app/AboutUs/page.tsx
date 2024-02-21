/* eslint-disable react-hooks/rules-of-hooks */
// Import the necessary libraries
"use client";
import React, { useEffect, useRef, useState } from 'react';  
 
 
  function page() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
      const handleScroll = () => {
        const sectionElement = sectionRef.current;
        if (sectionElement) {
          const { top } = sectionElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          // If the top of the section is within the viewport height
          // Add the CSS class to trigger the animation
          setIsVisible(top < windowHeight);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    // AboutUs section with a full height background
    <>

    {/* About Us Head Start */}
    <section className="h-screen text-black flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center w-100">
          <h1 className='text-4xl font-semibold'>About Us</h1>
          <p className='text-lg text-center'>It involves using biometric security software to automatically recognise people based on their behavioural or biological characteristics.</p>
        </div>
      </section> 
      {/* About Us Head End */}


      {/* About Us Intro Start */}
      <section ref={sectionRef} className={`md:h-screen  flex md:flex-row p-9 flex-col items-center justify-around ${isVisible ? 'animation' : ''}`}>
        <div className='md:w-[350px] md:h-[350px] w-[300px] h-[300px]' >
          <img className="rounded-full shadow-2xl" src="/aboutus-logo.png" alt="" />
        </div>
        <div className="md:mt-0 mt-[50px]">
          <h4 className='text-black font-semibold'>About Us</h4>
          <h1 className='text-4xl text-[#020329] font-semibold'>Transform Security With <br /> Biometric Recognition. Its Just A <br /> Click Away With <span className="text-[#FA975C]">Digital Fortress</span></h1>
          <p className='my-7 text-[#6A6A6C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus <br /> modi eius voluptates delectus deserunt earum eaque natus eum. <br />  Et voluptatem doloremque cumque adipisci.</p>
          <button className='text-sm bg-[#423359] px-14 py-4'>See Details</button>
        </div>
      </section>
      {/* About Us Intro End */}

    {/* About Us Info Start */}
    <section ref={sectionRef} className={`md:h-screen ${isVisible ? 'animation' : ''}`}>
      <div className="flex md:flex-row flex-col md:p-0 p-[20px] items-center justify-center gap-[150px]">
        <div className="text-black">
          <h4 className='font-semibold text-sm text-black'>Welcome</h4>
          <h1 className='text-4xl my-2 font-semibold'>Hello World, Welcome to <br /> <span className="text-[#FA975C]">Digital Fortress</span></h1>
          <p className='text-sm font-light my-9'>It involves using biometric security software to automatically recognise <br /> people based on their behavioural or biological characteristics.</p>
          <p className='font-semibold'>Embrace the Future of Security with Our Biometric Solutions!</p>
          <p className='font-semibold'>Team- Digital Fortress</p>
        </div>

        <div className="shadow-2xl rounded-b-[250px] rounded-t-[250px] bg-white md:w-[420px] w-[320px] md:h-[530px] h-[430px] flex items-center justify-center">
          <div className='bg-[#ccc] md:w-[400px] w-[300px] md:h-[460px] h-[360px] m-9 rounded-b-[250px] rounded-t-[250px]' ></div>
        </div>
      </div>
    </section>
    {/* About Us Info End */}

    

    {/* About Us Testimonials Start */}
    <section className='md:h-screen md:my-0 my-8'>
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
      {/* About Us Testimonials End */}

      {/* About Us Featured Start */} 
      <section className="md:h-screen">
        <div className="text-black md:mb-0 mb-9">
          <h1 className='text-5xl font-semibold text-center'>Featured In</h1>
          <div className="flex md:flex-row flex-col justify-around items-center mt-12">
            <div className="w-[250px]">
              <img className='md:mt-[25px] mt-[25px] h-[300px]' src="/cloud-summit.svg" alt="" />
              <h3 className='text-xl font-semibold mt-9'>Cloud Security Align Summit</h3>
              <p className='font-light text-xs'>Banglore</p>
            </div>
              <div className="w-[250px]">
                <img className='md:mt-0 mt-[25px] h-[300px]' src="/deep-tech.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Deep Tech Summit</h3>
                <p className='font-light text-xs'>Vishakapatnam</p>
            </div>
              <div className="w-[250px]">
                <img className='md:mt-[15px] mt-[25px] h-[300px]' src="/fido.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Fido(Fast Identity Online Developer) Challenge</h3>
              </div>
              <div className="w-[250px]">
                <img className='h-[300px] md:mt-0 mt-[25px]' src="/inex.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>INEX</h3>
                <p className='font-light text-xs'>Goa</p>
              </div>
          </div>
        </div>
      </section>
    
    </>
  );
}

// Export the AboutUs component
export default page;
