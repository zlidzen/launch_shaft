import { useState, type ComponentProps } from 'react'
import RocketNav from '../components/rocketNav/RocketNav'
import ActiveRocketSection from '../components/rocketSection/ActiveRocketSection'
import type { ShipSectionType } from '../components/rocketSection/rocketSectionTypes'

const Rocket = () => {
  const [activeSection, setActiveSection] = useState<ComponentProps<typeof RocketNav>['activeSection']>('how-it-works')
  const [activeShipSection, setActiveShipSection] = useState<ComponentProps<typeof ActiveRocketSection>['activeShipSection']>('frigates')

  const handleSelectSection = (
    section: ComponentProps<typeof RocketNav>['activeSection'],
    shipSection?: ShipSectionType,
  ) => {
    setActiveSection(section)

    if (shipSection) {
      setActiveShipSection(shipSection)
    }
  }

  return (
    <section className="page page-rocket">
      <RocketNav
        activeSection={activeSection}
        activeShipSection={activeShipSection}
        onSelectSection={handleSelectSection}
      />
      <ActiveRocketSection
        activeSection={activeSection}
        activeShipSection={activeShipSection}
        onSelectShipSection={setActiveShipSection}
      />
    </section>
  )
}

export default Rocket
