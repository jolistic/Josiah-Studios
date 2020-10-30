import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import ReactPlayer from "react-player"

const Music = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#FF7700">
      <SEO title="Music | Josiah" desc="Hear my music!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div>
            <ReactPlayer url="https://soundcloud.com/josiah-tan-677035521/calm" />
        </div>
      </AnimatedBox>
    </Layout>
  )
}

export default Music
