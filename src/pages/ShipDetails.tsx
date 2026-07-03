import { Link, useParams } from 'react-router-dom'
import { shipLists } from '../data/shipLists'
import { sorted_Result, Position } from '../data/Caracal_stats.ts'
import { moduleLists } from '../data/moduleLists.ts'

const ShipDetails = () => {
  const params = useParams()
  const rawName = params.name
  const shipName = rawName ? decodeURIComponent(rawName) : null

  const allShips = Object.values(shipLists).flat()
  const ship = shipName ? allShips.find((s) => s.name === shipName) : null

  if (!shipName) {
    return (
      <section className="page">
        <h2>Ship</h2>
        <p>No ship specified.</p>
      </section>
    )
  }

  if (!ship) {
    return (
      <section className="page">
        <h2>{shipName}</h2>
        <p>Ship not found in the database.</p>
        <p>
          <Link to="/rocket">Back to ships</Link>
        </p>
      </section>
    )
  }

  // Example descriptive content and fits for Caracal (and similar cruisers)
  const fits = {
    kiting: [
      '450mm AutoCannon II',
      '1600mm Rolled Tungsten Barrel I',
      'Ballistic Control System II',
      '100MN Afterburner II',
      'Large Shield Extender II',
      'EM Shield Hardener II',
      'Medium Core Defense Field Extender I',
      'Heavy Missile Launcher II x4 (Scourge/Hail)',
      'Sisters Core Probe Launcher',
    ],
    brawling: [
      'Ballistic Control System II',
      'Damage Control II',
      'Large Shield Extender II',
      '100MN Afterburner II',
      'Warp Disruptor II',
      'Heavy Missile Launcher II x4 (Scourge/Hail)',
      'Light Missile Launcher II x2 (for drones/utility)',
    ],
    pve: [
      'Ballistic Control System II',
      'Large Shield Extender II',
      'Shield Power Relay II',
      '100MN Afterburner II',
      'Heavy Missile Launcher II x4 (Hail/Scourge)',
      'Target Painter II',
      'ECCM II',
    ],
  }

  return (
    <section className="page page-ship-details">
      <h2>{ship.name}</h2>
      {ship.id ? (
        <img
          src={`https://images.evetech.net/types/${ship.id}/render?size=256`}
          alt={`${ship.name} render`}
          style={{ maxWidth: 256 }}
        />
      ) : null}
      <p>{ship.role}</p>
      <h3>Description</h3>
      <p>
        The {ship.name} is a Caldari cruiser-class vessel primarily designed around missile launchers. It favors
        kiting and medium-range engagements where missile application and tracking can be optimized. The hull scales
        well with shield and propulsion modules to keep missiles on target.
      </p>

      <h3>Fits Statistics:</h3>

      <section>
        <h4>High Slot</h4>
        <ul>
          {sorted_Result(Position.high).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Mid Slot</h4>
        <ul>
          {sorted_Result(Position.mid).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Low Slot</h4>
        <ul>
          {sorted_Result(Position.low).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Rigs Slot</h4>
        <ul>
          {sorted_Result(Position.rig).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

        <section>
        <h4>Drone Bay</h4>
        <ul>
          {sorted_Result(Position.droneBay).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Cargo</h4>
        <ul>
          {sorted_Result(Position.cargo).map(({ type_id, quantity }) => (
            <li key={type_id}>
              {type_id ? (
              <img src={`https://images.evetech.net/types/${type_id}/icon?size=32`}
              alt={`${moduleLists.high_slot.find(item => item.id === type_id)?.name} icon`}
              />) : null}
              {' '}
              {moduleLists.high_slot.find(item => item.id === type_id)?.name}
              {type_id} (Quantity: {quantity})
              </li>
          ))}
        </ul>
      </section>

      <p>
        <Link to="/rocket">Back to ships</Link>
      </p>
    </section>
  )
}

export default ShipDetails
