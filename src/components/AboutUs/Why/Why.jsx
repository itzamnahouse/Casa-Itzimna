import Image from "next/image";
import React from "react";
import foto from "./foto.png";
import flor from "./flor.png";
import cafe from './cafe.png'
import blanca from './blanca.png'
import { AiFillDownCircle, AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";

function Why({ json }) {

  const [pregunta1, setPregunta1] = useState(true)
  const [pregunta2, setPregunta2] = useState(false)
  const [pregunta3, setPregunta3] = useState(false)
  console.log(pregunta1)

  const handleClickButton1 = () => {

  }

  return (
    <div className="w-full h-[700px] flex flex-row justify-center gap-8">
      <div className="w-[500px] h-full flex flex-col justify-center">
        <Image
          src={foto}
          alt="foto alberca"
          className="w-[500px] h-[350px] object-cover rounded-[18px] drop-shadow-2xl"
        />
      </div>
      <div className="w-[25%] flex flex-col justify-center">
        <div className="flex flex-col w-full ">
          <h3 className="text-[40px] font-cinzelBold  ">{json.Why.title}</h3>
          <div className="w-[380px] h-full flex flex-row relative ">
            <div className="bg-[#b4a692] w-[370px] h-[2px]"></div>
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
            />
          </div>

          <h3 className="text-xl font-apollo tracking-[3px] flex flex-row gap-2 items-center cursor-pointer"
          onClick={()=>{setPregunta1(!pregunta1); setPregunta2(false); setPregunta3(false)}}
          >
            {
              pregunta1?
          <Image src={cafe} alt="boton cafe"  className="w-[50px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px]"/>
            }
          
            
            {json.Why.question1}
          </h3>
          <div className="h-[20px] w-full bg-[#aea08c] mt-5 mb-4"></div>
          <p className={`font-ethereal text-lg tracking-[2px] flex flex-row ${pregunta1 == false? 'hidden': null }`}>
            {json.Why.answer1}
          </p>
          <h3 className="text-xl font-apollo tracking-[3px] flex flex-row gap-2 items-center cursor-pointer "
         onClick={()=>{setPregunta2(!pregunta2); setPregunta1(false); setPregunta3(false)}}
          >
          {
              pregunta2?
          <Image src={cafe} alt="boton cafe"  className="w-[50px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px]"/>
            }
            {json.Why.question2}
          </h3>
          <div className="h-[20px] w-full bg-[#aea08c] mt-5 mb-4 "></div>
          <p className={`font-ethereal text-lg tracking-[2px] flex flex-row ${pregunta2 == false? 'hidden': null }`}>
            {json.Why.answer2}
          </p>
          <h3 className="text-xl font-apollo tracking-[3px] flex flex-row gap-2 items-center cursor-pointer" 
       onClick={()=>{setPregunta3(!pregunta3); setPregunta2(false); setPregunta1(false)}}
          >
          {
              pregunta3?
          <Image src={cafe} alt="boton cafe"  className="w-[50px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px]"/>
            }
            {json.Why.question3}
          </h3>
          <p className={`font-ethereal text-lg tracking-[2px] flex flex-row ${pregunta3 == false? 'hidden': null }`}>
            {json.Why.answer3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
