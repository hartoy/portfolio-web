import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const ProgressBar = ({ bgcolor, completed }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const containerStyles = {
    height: 40,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
  }

  const fillerStyles = {
    height: '100%',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  const animationProps = useSpring({
    from: { width: '0%', completed: 0 },
    to: { width: inView ? `${completed}%` : '0%', completed: inView ? completed : 0 },
    config: { duration: 4000 },
  })

  return (
    <div ref={inViewRef} style={containerStyles}>
      <animated.div style={{ ...fillerStyles, width: animationProps.width }}>
        <animated.span style={labelStyles}>
          {animationProps.completed.interpolate((x) => `${Math.floor(x)}%`)}
        </animated.span>
      </animated.div>
    </div>
  )
}

export default ProgressBar
