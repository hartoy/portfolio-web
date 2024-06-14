import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const dataExp = t('dataExp', { returnObjects: true })
  const outExp = t('outExp', { returnObjects: true })

  return (
    <div
      id="exp"
      className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:mt-[120px] md:items-center text-white"
    >
      <h1 className="text-center md:text-[72px] text-[42px] uppercase">{t('navbar.experience')}</h1>
      <p className="text-center md:text-[22px]  text-justify mt-4 italic text-[#DBE2EF]">
        {t('subtitles.subExperience')}
      </p>
      <div className="exp mt-4">
        <div className="exp-div flex flex-col md:flex-row md:grid md:grid-cols-2 md:gap-6">
          {dataExp.map((data) => (
            <div
              key={data.id}
              className="w-full bg-[#F9F7F7] hover:bg-[#DBE2EF] p-4 rounded my-4 md:my-3 text-[#3F72AF] hover:text-[#112D4E] shadow hover:shadow-lg hover:shadow-white"
            >
              <div className="name-date pb-2">
                <div className="flex flex-col md:flex-row justify-between">
                  <h2 className="text-[28px]"> {data.name} </h2>
                  <span className="text-[14px] md:text-[18px]">
                    {data.dateIn} - {data.dateEnd}
                  </span>
                </div>
                <span className="text-[18px] italic">{data.position}</span>
                <hr className="border-t-2 border-[#112D4E] mt-2" />
              </div>
              <p className="text-justify">{data.description}</p>
            </div>
          ))}
          {outExp.map((data) => (
            <div
              key={data.id}
              className="w-full bg-[#F9F7F7] hover:bg-[#DBE2EF] p-4 rounded my-4 md:my-3 text-[#3F72AF] hover:text-[#112D4E] shadow hover:shadow-lg hover:shadow-white"
            >
              <div className="name-date pb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[20px]"> {data.name} </h2>
                  <span className="text-[14px] md:text-[18px]">
                    {data.dateIn} - {data.dateEnd}
                  </span>
                </div>
                <span className="text-[18px] italic">{data.puesto}</span>
                <hr className="border-t-2 border-[#112D4E] mt-2" />
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
