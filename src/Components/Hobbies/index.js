import React from 'react'
import { Tooltip } from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import { hobbiesImages } from '../../data'

const Hobbies = ({ title, subtitle, imagesKey }) => {
  const { t } = useTranslation()

  const images = hobbiesImages[imagesKey] || []

  return (
    <div className="flex flex-col">
      <span className="hobbie-title uppercase text-[32px]">{t(title)}</span>
      <span className="hobbie-subtitle italic">{subtitle}</span>
      <div className="imgs flex flex-row justify-evenly mt-3 mb-7">
        {console.log(images)}
        {images.map((image, index) => {
          return (
            <img
              key={index}
              className="hobbie-img w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
              src={image.src}
              alt={image.alt}
              data-tooltip-id={image.tooltipId}
              data-tooltip-content={image.tooltipContent}
              data-tooltip-place="bottom"
            />
          )
        })}
      </div>
      {images.map((image, index) => (
        <Tooltip key={index} style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id={image.tooltipId} />
      ))}
    </div>
  )
}

export default Hobbies
