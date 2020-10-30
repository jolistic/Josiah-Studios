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
        <h1>Hi. I'm Josiah!</h1>
        <iframe src="https://drive.google.com/file/d/1tspvykfLtDW9-Di31XAYjCd2RBzWfTXi/view?usp=sharing" width="400px" height="300px"  />
        <p>Here's how to contact me:</p>
        <li>
          <a href="mailto:contact@josiahstudios.com">Email</a>
        </li>
        <li>
          <a href="https://www.instagram.com/josiahtyx">Instagram</a>
        </li>
      </AnimatedBox>
    </Layout>
  )
}

export default About
