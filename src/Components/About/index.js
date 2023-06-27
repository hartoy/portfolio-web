import React from 'react'
import { dataExp, outExp } from '../../data'

const About = () => {
  return (
    <div className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white">
      <h1 className="text-center md:text-[72px] text-[42px] uppercase">Experiencia</h1>
      <p className="text-center md:text-[22px]  text-justify mt-4">
        Hace muchos años que trabajo y me formo para mejorar dia a dia. Tanto en el mundo IT como en otros rubros
      </p>
      <div className="exp mt-4">
        <div className="exp-div flex flex-col md:flex-row md:grid md:grid-cols-2 md:gap-6">
          {dataExp.map((data) => (
            <div className="w-full bg-violet-900 hover:bg-violet-600 p-4 rounded my-4 md:my-3">
              <div className="name-date pb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[28px]"> {data.name} </h2>
                  <span className="text-[14px] md:text-[18px]">
                    {data.dateIn} - {data.dateEnd}
                  </span>
                </div>
                <span className="text-[18px] italic">{data.puesto}</span>
                <hr className="border-t-2 border-white mt-2" />
              </div>
              <p className="text-justify">{data.description}</p>
            </div>
          ))}
          {outExp.map((data) => (
            <div className="w-full bg-violet-600 hover:bg-violet-800 p-4 rounded my-4 md:my-3">
              <div className="name-date pb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[20px]"> {data.name} </h2>
                  <span className="text-[14px] md:text-[18px]">
                    {data.dateIn} - {data.dateEnd}
                  </span>
                </div>
                <span className="text-[18px] italic">{data.puesto}</span>
                <hr className="border-t-2 border-gray-700 mt-2" />
              </div>
              <p className="text-justify">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
