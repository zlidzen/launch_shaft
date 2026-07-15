export type ShipEntry = {
  id: number
  name: string
  role: string
}

export type shipSectionType = 'frigates' | 'destroyers' | 'cruisers' | 'battlecruisers'

export const shipLists: Record<shipSectionType, ShipEntry[]> = {
  frigates: [
    { id: 602, name: 'Kestrel', role: 'Classic Caldari missile frigate' },
    { id: 598, name: 'Breacher', role: 'Brawling rocket frigate' },
    { id: 583, name: 'Condor', role: 'Fast tackle missile frigate' },
    { id: 17619, name: 'Caldari Navy Hookbill', role: 'Navy frigate with strong missile pressure' },
    { id: 17930, name: 'Worm', role: 'Pirate frigate with strong drone and missile support' },
    { id: 33816, name: 'Garmur', role: 'Long-range missile kiting frigate' },
  ],
  destroyers: [
    { id: 32876, name: 'Corax', role: 'Caldari missile destroyer' },
    { id: 91857, name: 'Corax Navy Issue', role: 'Navy destroyer with strong missile pressure' },
    { id: 32878, name: 'Talwar', role: 'Minmatar missile destroyer' },
    { id: 91858, name: 'Talwar Fleet Issue', role: 'Fleet issue missile destroyer' },
    { id: 42685, name: 'Sunesis', role: 'Flexible pirate destroyer hull' },
  ],
  cruisers: [
    { id: 621, name: 'Caracal', role: 'Standard missile cruiser' },
    { id: 17634, name: 'Caracal Navy Issue', role: 'Upgraded missile cruiser' },
    { id: 29340, name: 'Osprey Navy Issue', role: 'Missile cruiser with strong range' },
    { id: 17715, name: 'Gila', role: 'Drone and missile cruiser with strong application' },
  ],
  battlecruisers: [
    { id: 24698, name: 'Drake', role: 'Armored missile battlecruiser' },
    { id: 24702, name: 'Hurricane', role: 'Versatile missile battlecruiser' },
    { id: 24696, name: 'Harbinger', role: 'Long-range missile battlecruiser' },
    { id: 22446, name: 'Vulture', role: 'Fast missile battlecruiser' },
    { id: 624, name: 'Maller', role: 'Shield-tanked hybrid cruiser with missile fits' },
    { id: 17843, name: 'Vexor Navy Issue', role: 'Drone and missile support battlecruiser' },
  ],
}

export const shipSectionTitles: Record<shipSectionType, string> = {
  frigates: 'Frigates',
  destroyers: 'Destroyers',
  cruisers: 'Cruisers',
  battlecruisers: 'Battle Cruisers',
}

export const shipSectionSpeedAndSignature: Record<shipSectionType, string> = {
  frigates: 'speed: 200 m/s, signature: 50 m',
  destroyers: 'speed: 150 m/s, signature: 100 m',
  cruisers: 'speed: 120 m/s, signature: 150 m',
  battlecruisers: 'speed: 100 m/s, signature: 200 m',
}
