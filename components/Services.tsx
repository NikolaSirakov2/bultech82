import React from 'react'
import { PRODUCTION_PROCESSES, POST_PROCESSING } from '../constants'

const services = [
  { name: 'Laser Cutting', image: '/LaserCutting.jpg' },
  { name: 'Bending', image: '/Bending.jpg' },
  { name: 'Welding', image: '/Welding.jpg' },
  { name: 'Deburring', image: '/Deburring.jpg' },
];

function Services() {
  return (
    <section id="services" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <h2 className="text-4xl font-bold mb-4">Production Processes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRODUCTION_PROCESSES.map((process, index) => (
          <div key={index} className="card">
            <img src={services[index % services.length].image} alt={process} className="w-full h-64 object-cover" />
            <div className="card-body">
              <h2 className="card-title">{process}</h2>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold mt-8 mb-4">Post Processing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {POST_PROCESSING.map((process, index) => (
          <div key={index} className="card">
            <img src={services[(index + services.length / 2) % services.length].image} alt={process} className="w-full h-64 object-cover" />
            <div className="card-body">
              <h2 className="card-title">{process}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services