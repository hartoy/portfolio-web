import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useEffect } from 'react'

const Contact = () => {
  const form = useRef()
  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    const userName = form.current.user_name.value.trim()
    const userEmail = form.current.user_email.value.trim()
    const message = form.current.message.value.trim()

    if (!userName || !userEmail || !message) {
      console.log('vacio')
      setError(true)
    } else {
      emailjs.sendForm('service_ojmrgbl', 'template_qnndevh', form.current, '57W2XArxrL4Qxw8s2').then(
        (result) => {
          console.log(result.text)
          setSend(true)
          setError(false)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
    }
  }

  useEffect(() => {
    if (send) {
      const timeout = setTimeout(() => {
        setSend(false)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [send])

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
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`flex-1 border rounded flex flex-col gap-y-6 pb-16 p-6 items-start hover:bg-[#3F72AF] ${
            send ? 'bg-green-700 hover:bg-green-700' : ''
          }`}
        >
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 transition-all hover:border-[#112D4E]"
            placeholder="Nombre"
            type="text"
            name="user_name"
          />
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 transition-all hover:border-[#112D4E]"
            type="email"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            className=" bg-transparent hover:border-[#112D4E] border-b py-12 outline-none w-full placeholder:text-white focus:placeholder:text-sky-500 resize-none mb-12"
            placeholder="Escribe tu mensaje"
            type="email"
            name="message"
          ></textarea>
          {!send ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:w-[150px] md:h-[40px] bg-[#DBE2EF] hover:bg-[#F9F7F7] focus:ring-4 focus:outline-none focus:[#3F72AF] dark:focus:[#3F72AF] shadow-lg shadow-[#3F72AF] dark:shadow-lg dark:shadow-[#3F72AF] font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-[#3F72AF]"
              type="submit"
            >
              Enviar
            </motion.button>
          ) : (
            <span style={{ fontFamily: "'Bungee Inline', cursive" }}>Mensaje enviado ✔️</span>
          )}
          {error ? <span className="text-red-400">Debe completar todos los campos</span> : ''}
        </form>
      </div>
    </div>
  )
}

export default Contact
