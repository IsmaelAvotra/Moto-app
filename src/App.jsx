import { useState } from 'react'
import './App.css'
import menu from './assets/menu.png'
import logo from './assets/logo.png'
import monster from './assets/monster.png'
import number1 from './assets/797.png'
import number2 from './assets/821.png'
import number3 from './assets/797.png'
import prev from './assets/prev.png'
import next from './assets/next.png'
import monster1 from './assets/monster-1.png'
import monster2 from './assets/monster-2.png'
import monster3 from './assets/monster-3.png'

function App() {
  const [step, setStep] = useState(1)
  const infos = {
    1: {
      displacement: '803 cc',
      power: '73 hp (54 kW)',
      torque: '67 Nm (49.0 lb-ft)',
      weight: '175 Kg (386 lb)',
      height: '805 mm (31.69 in)',
      safety: 'ABS',
    },
    2: {
      displacement: '821 cc',
      power: '109 hp (80 kW)',
      torque: '86 Nm (63 lb-ft)',
      weight: '180.5 Kg (398 lb)',
      height: '805 mm (31.69 in)',
      safety: 'ABS',
    },
    3: {
      displacement: '803 cc',
      power: '73 hp (54 kW)',
      torque: '67 Nm (49.0 lb-ft)',
      weight: '175 Kg (386 lb)',
      height: '805 mm (31.69 in)',
      safety: 'ABS',
    },
  }
  const nextSlide = () => {
    setStep((oldStep) => {
      let step = oldStep + 1
      if (step > 3) {
        step = 1
        console.log(step)
      }
      console.log(step)
      return step
    })
  }
  const prevSlide = () => {
    setStep((oldStep) => {
      let step = oldStep - 1
      if (step < 1) {
        step = 3
      }
      return step
    })
  }

  return (
    <div className='App'>
      <header>
        <img src={menu} alt='menu' className='menu' />
        <p>
          <span>INTERNATIONAL WEBSITE</span>
          <span>|</span>
          <span>MY DUCATI</span>
        </p>
      </header>

      <div className='content-logo'>
        <img src={logo} className='logo' />
        <img src={monster} className='monster' />
        <div className='numberDiv'>
          {step == 1 && <img src={number1} className='number' />}
          {step == 2 && <img src={number2} className='number' />}
          {step == 3 && <img src={number3} className='number' />}
        </div>
      </div>

      <div className='next-prev'>
        <img src={prev} onClick={prevSlide} />
        <img src={next} className='next' onClick={nextSlide} />
      </div>

      <div className='container'>
        <div className='informations'>
          <p>Displacement</p>
          <strong>{infos[step].displacement}</strong>
          <p>Horse Power</p>
          <strong>{infos[step].power}</strong>
          <p>Torque</p>
          <strong>{infos[step].torque}</strong>
          <p>Dry Weight</p>
          <strong>{infos[step].weight}</strong>
          <p>Seat Height</p>
          <strong>{infos[step].height}</strong>
          <p>Safety</p>
          <strong>{infos[step].safety}</strong>
        </div>

        <div className='buttons'>
          <button
            className={`red ${step === 1 && 'active'}`}
            onClick={() => setStep(1)}
          ></button>
          <button
            className={`black ${step === 2 && 'active'}`}
            onClick={() => setStep(2)}
          ></button>
          <button
            className={`white ${step === 3 && 'active'}`}
            onClick={() => setStep(3)}
          ></button>
        </div>
        <div className='image'>
          {step === 1 && <img src={monster1} />}
          {step === 2 && <img src={monster2} />}
          {step === 3 && <img src={monster3} />}
        </div>

        <div className='vibes'>
          <span>Fresh vibes.</span>
          <p>Sporty soul.</p>
        </div>
      </div>
    </div>
  )
}

export default App
