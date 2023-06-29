import React, { useState, useEffect } from 'react'
import { dataExp, outExp } from '../../data'
import { computeHeadingLevel } from '@testing-library/react'

const Test = () => {
  const [lopo, setLopo] = useState([])

  const testFuncion = (name) => {
    return console.log('elnombre del a funcion es', name)
  }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setLopo(res)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] items-center md:items-center text-white">
      <span onClick={() => testFuncion('lopito')}>Test</span>
      <div className="grid md:grid-cols-3 gap-4 w-full">
        {lopo.map((pais) => (
          <div className="flex flex-col p-4 bg-red-500 rounded text-white" key={pais.cca2}>
            <span>Nombre: {pais.name.common} </span>
            <span>Capital: {pais.capital} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Test
