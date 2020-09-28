import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Josiah" desc="Hi. I'm Josiah! Here's how to contact me." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm LekoArts!</h1>
        <p>You can visit my website or my other Gatsby projects:</p>
        <p>
          <a href="mailto:jtyxcreative@gmail.com">Email</a> - <a href="https://www.instagram.com/josiahtyx">Instagram</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
