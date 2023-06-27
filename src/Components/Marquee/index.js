// import React, { useState } from 'react'
// import './marquee.css'
// import { dataSkills } from '../../data'

// const ScrollingText = () => {
//   const [skillsText, setSkillsText] = useState(dataSkills.join('  -  ') + '  -  ' + dataSkills.join('  -  '))

//   return (
//     <div className="marquee bg-[#9CE02E] h-[55px] md:h-[65px] mt-[55px] flex items-center custom-shadow md:text-[30px]">
//       <span className="w-full">{skillsText}</span>
//     </div>
//   )
// }

// export default ScrollingText

import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { dataSkills } from '../../data'

const ScrollingText = () => {
  const [skillsText, setSkillsText] = useState(dataSkills.join(' - '))

  return (
    <Marquee
      className="marquee text-white bg-[#3F72AF] hover:bg-[#DBE2EF] hover:text-[#112D4E] h-[55px] md:h-[75px] mt-[55px] flex items-center custom-shadow md:text-[30px]"
      autoFill={true}
    >
      {skillsText}
    </Marquee>
  )
}

export default ScrollingText
