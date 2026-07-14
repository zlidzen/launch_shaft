import { useState, type ComponentProps } from 'react'
import RocketNav from '../components/rocketNav/RocketNav'
import ActiveRocketSection from '../components/rocketSection/ActiveRocketSection'

const Rocket = () => {
  const [activeSection, setActiveSection] = useState<ComponentProps<typeof RocketNav>['activeSection']>('how-it-works')
  const [activeShipSection, setActiveShipSection] = useState<ComponentProps<typeof ActiveRocketSection>['activeShipSection']>('frigates')

  return (
    <section className="page page-rocket">
      <RocketNav activeSection={activeSection} onSelectSection={setActiveSection} />
      <ActiveRocketSection
        activeSection={activeSection}
        activeShipSection={activeShipSection}
        onSelectShipSection={setActiveShipSection}
      />
    </section>
  )
}

export default Rocket
