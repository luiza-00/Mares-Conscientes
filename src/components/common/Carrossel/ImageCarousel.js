// src/components/sections/AboutUsSection/components/Carrossel/ImageCarousel.js
import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div>
      <h1 style={{zIndex:2, fontSize: '3.5rem', textAlign: 'center', color:'#B65B36', marginTop: '100px', marginBottom: '100px'}}>A NOSSA MADRE PERTENCE A GENTE!</h1>
      </div>
      <div className="navigation-wrapper" style={{ position: 'relative' , marginBottom: '50px'}}>
        <div ref={sliderRef} className="keen-slider">
          {[...Array(10).keys()].map((i) => (
            <div
              key={i}
              className={`keen-slider__slide number-slide${i + 1}`}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                src={`/images/Group ${i + 1}.png`}
                alt={`Slide ${i + 1}`}
                style={{ width: '100%', maxWidth: '600px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots" style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '100px' }}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
              style={{
                border: 'none',
                width: '12px',
                height: '12px',
                margin: '0 4px',
                borderRadius: '50%',
                background: currentSlide === idx ? '#B65B36' : '#ccc',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

function Arrow({ left, onClick, disabled }) {
  const baseStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '2rem',
    height: '2rem',
    fill: '#B65B36',
    cursor: 'pointer',
    opacity: disabled ? 0.3 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    zIndex: 10,
  }

  const style = left
    ? { ...baseStyle, left: '10px' }
    : { ...baseStyle, right: '10px' }

  return (
    <svg
      onClick={onClick}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default ImageCarousel
