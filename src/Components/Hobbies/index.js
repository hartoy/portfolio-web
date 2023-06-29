import React from 'react'
import { Tooltip } from 'react-tooltip'
import ImgTest from '../img/hobbie-theweeknd.jpg'
import ImgMJ from '../img/hobbies-mj.png'
import ImgMiley from '../img/hobbies-miley.jpg'
import ImgEspacio from '../img/hobbies-espacio.jpg'
import ImgSocc from '../img/hobbies-soccer.jpg'
import ImgNfl from '../img/hobbies-nfl.jpg'
import ImgNba from '../img/hobbies-nba.jpg'
import ImgBox from '../img/hobbies-boxing.jpg'
import ImgTB from '../img/hobbies-tampa.jpg'
import ImgAfa from '../img/hobbies-afa.jpg'
import ImgRiver from '../img/hobbies-river.jpg'
import ImgLA from '../img/hobbies-lakers.jpg'
import ImgValo from '../img/hobbies-valo.jpg'
import ImgF23 from '../img/hobbies-fifa23.jpg'
import ImgBtf from '../img/hobbies-btf.jpg'
import ImgLol from '../img/hobbies-lol.jpg'

const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white"
    >
      <h2 className="md:text-[72px] text-[42px] mb-4 text-center uppercase">HOBBIES</h2>
      <span className="text-justify md:text-[22px] italic text-[#DBE2EF]">
        Todos necesitamos hobbies para evitar el estrés, la rutina diaria y el sedentarismo. Aquí podrás conocer las
        actividades que me motivan día a día, desafiándome física y mentalmente, y que me permiten desarrollar mi
        creatividad al desconectarme de mis obligaciones por un rato.
      </span>
      <div className="flex flex-col md:flex-row mt-[40px] text-center">
        <div className="flex flex-col">
          <div className="hobbies grid md:grid-cols-2 gap-2 hover:p-0">
            <div className="flex flex-col">
              <span className="uppercase text-[32px]">Equipos favoritos</span>
              <span className="italic">"Si nunca pierdes, no disfrutarás la felicidad de la victoria"</span>
              <div className="imgs flex flex-row justify-evenly mt-3 mb-7">
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgAfa}
                  alt=""
                  data-tooltip-id="afa"
                  data-tooltip-content="Seleccion Argentina"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgRiver}
                  alt=""
                  data-tooltip-id="carp"
                  data-tooltip-content="River Plate"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0 "
                  src={ImgTB}
                  alt=""
                  data-tooltip-id="tampa"
                  data-tooltip-content="Buccaneers"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgLA}
                  alt=""
                  data-tooltip-id="lakers"
                  data-tooltip-content="Lakers"
                  data-tooltip-place="bottom"
                />
              </div>
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="afa" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="carp" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="tampa" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="lakers" />
            </div>

            <div className="flex flex-col">
              <span className="uppercase text-[30px]">Deportes favoritos</span>
              <span className="italic">
                "Puedes ser lo que quieras ser, siempre que lo intentes el tiempo suficiente."
              </span>
              <div className="imgs flex flex-row justify-evenly mt-3 mb-7">
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgSocc}
                  alt=""
                  data-tooltip-id="futbol"
                  data-tooltip-content="Futbol"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgNfl}
                  alt=""
                  data-tooltip-id="nfl"
                  data-tooltip-content="NFL"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgNba}
                  alt=""
                  data-tooltip-id="nba"
                  data-tooltip-content="NBA"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgBox}
                  alt=""
                  data-tooltip-id="boxing"
                  data-tooltip-content="Boxing"
                  data-tooltip-place="bottom"
                />
              </div>
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="futbol" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="nfl" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="nba" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="boxing" />
            </div>

            <div className="flex flex-col">
              <span className="uppercase text-[32px]">Artistas favoritos</span>
              <span className="italic">"Si no fuera por la música, habría más razones para volverse loco"</span>
              <div className="imgs flex flex-row justify-evenly mt-3 mb-7">
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgTest}
                  alt=""
                  data-tooltip-id="tw"
                  data-tooltip-content="The Weeknd"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgMJ}
                  alt=""
                  data-tooltip-id="mj"
                  data-tooltip-content="Michael Jackson"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgMiley}
                  alt=""
                  data-tooltip-id="miley"
                  data-tooltip-content="Miley Cyrus"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgEspacio}
                  alt=""
                  data-tooltip-id="space"
                  data-tooltip-content="Los Del Espacio"
                  data-tooltip-place="bottom"
                />
              </div>
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="tw" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="mj" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="miley" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="space" />
            </div>

            <div className="flex flex-col">
              <span className="uppercase text-[32px]">Juegos favoritos</span>
              <span className="italic">"Si estás perdiendo tu tiempo libre puede que estés perdiendo tu alma”</span>
              <div className="imgs flex flex-row justify-evenly mt-3 mb-7">
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgValo}
                  alt=""
                  data-tooltip-id="valo"
                  data-tooltip-content="Valorant"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgF23}
                  alt=""
                  data-tooltip-id="fifa23"
                  data-tooltip-content="Fifa"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgBtf}
                  alt=""
                  data-tooltip-id="btf"
                  data-tooltip-content="Battlefield"
                  data-tooltip-place="bottom"
                />
                <img
                  className="w-1/5 rounded-full border-[4px] border-[#3F72AF] p-2 hover:p-0"
                  src={ImgLol}
                  alt=""
                  data-tooltip-id="lol"
                  data-tooltip-content="League of Legends"
                  data-tooltip-place="bottom"
                />
              </div>
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="valo" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="fifa23" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="btf" />
              <Tooltip style={{ backgroundColor: '#F9F7F7', color: '#3F72AF' }} id="lol" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
