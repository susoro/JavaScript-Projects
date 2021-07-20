import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Schedule a Touchless Test Drive"
        backgroundImg="model-s.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
      />
      <Section 
        title="Model Y"
        description="Schedule a Touchless Test Drive"
        backgroundImg="model-y.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
      />
      <Section 
        title="Model 3"
        description="Schedule a Touchless Test Drive"
        backgroundImg="model-3.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
      />
      <Section 
        title="Model X"
        description="Schedule a Touchless Test Drive"
        backgroundImg="model-y.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
        />
      <Section
        title="Solar Roof"
        description="
        Produce Clean Energy
        From Your Roof
        "
        backgroundImg="solar-roof.jpg"
        leftBtnText ="Custom Order"
        rightBtnText ="Existing inventory"
        />

        <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText ="Shop now"
        
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
`