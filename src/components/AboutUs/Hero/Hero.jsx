import Image from 'next/image'; 
import React from 'react'
import hero1 from './heroabout.png'
import hero from './hero.jpg'
import hero2 from './hero2.jpg'
 
function Hero({json}) {
    return ( 
      <div className="w-full h-[70vh] lg:h-[90vh] flex flex-col relative"> 
          <Image
            src={hero2}
            alt="fondo"
            className="absolute w-full h-full object-cover"
          />
    
          <div className="flex flex-row justify-center  h-full w-full   text-white absolute z-10"> 
            <div className="w-full h-[85%] flex flex-col justify-end lg:justify-center text-center items-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl lg:mt-8 font-cinzelRegular">
                <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px]">A</span>Bout{" "}
                <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px] ">U</span>s{" "}
              </h1>
              <div className='flex lg:hidden h-[100px]'/>
                
    
            </div>
          </div>
        </div>
        )

    {/* <div className="w-full h-[700px] lg:h-full flex flex-col relative">
      <Image
        src={hero1}
        alt="fondo"
        className="absolute w-full h-screen object-cover"
      />

      <div className="flex flex-row justify-center  h-screen w-full   text-white absolute z-10"> 
        <div className="w-full h-full flex flex-col justify-center text-center items-center"> 
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzelRegular">
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">A</span>bout{" "}
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">U</span>s
          </h1>
          <div className='flex lg:hidden h-[100px]'/>
            

        </div>
      </div>
    </div> */}
    

    
  
  }
  
  export default Hero;