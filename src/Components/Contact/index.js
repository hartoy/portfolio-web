import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-start md:justify-center items-center mb-5 md:mb-0"
        >
          <div>
            <h1 className="md:text-[52px] text-[42px] uppercase text-center leading-none">Mandame tu mensaje</h1>
            <h2 className=" md:text-[42px] text-[22px] text-center mt-3">Trabajemos juntos!</h2>
          </div>
        </motion.div>
        <form className="flex-1 border rounded flex flex-col gap-y-6 pb-16 p-6 items-start">
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 transition-all"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 transition-all"
            type="text"
            placeholder="Email"
          />
          <textarea
            className=" bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 resize-none mb-12"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-900 md:w-[150px] md:h-[40px] bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Enviar mensaje
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default Contact
