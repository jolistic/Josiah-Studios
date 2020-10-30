import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import ReactPlayer from "react-player"

const Videos = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#000">
      <SEO title="Videos | Josiah" desc="Watch my videos!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
      <div className="App">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Kaj-w09GpLA"
      />
      </div>
      </AnimatedBox>
    </Layout>
  )
}

export default Videos
