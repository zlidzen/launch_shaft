export type ShipEntry = {
  id: number
  name: string
  role: string
}

export const shipLists: Record<'frigates' | 'destroyers' | 'cruisers' | 'battle-cruisers', ShipEntry[]> = {
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
    { id: 32878, name: 'Talwar', role: 'Minmatar missile destroyer' },
    { id: 34828, name: 'Jackdaw', role: 'Tactical destroyer with missile options' },
    { id: 22452, name: 'Heretic', role: 'Interdictor that can fit missile launchers' },
    { id: 42685, name: 'Sunesis', role: 'Flexible pirate destroyer hull' },
  ],
  cruisers: [
    { id: 621, name: 'Caracal', role: 'Standard missile cruiser' },
    { id: 17634, name: 'Caracal Navy Issue', role: 'Upgraded missile cruiser' },
    { id: 29340, name: 'Osprey Navy Issue', role: 'Missile cruiser with strong range' },
    { id: 11993, name: 'Cerberus', role: 'Heavy missile HAC' },
    { id: 12019, name: 'Sacrilege', role: 'Heavy assault missile HAC' },
    { id: 17715, name: 'Gila', role: 'Drone and missile cruiser with strong application' },
  ],
  'battle-cruisers': [
    { id: 24698, name: 'Drake', role: 'Armored missile battlecruiser' },
    { id: 24702, name: 'Hurricane', role: 'Versatile missile battlecruiser' },
    { id: 24696, name: 'Harbinger', role: 'Long-range missile battlecruiser' },
    { id: 22446, name: 'Vulture', role: 'Fast missile battlecruiser' },
    { id: 624, name: 'Maller', role: 'Shield-tanked hybrid cruiser with missile fits' },
    { id: 17843, name: 'Vexor Navy Issue', role: 'Drone and missile support battlecruiser' },
  ],
}

export const shipSectionTitles: Record<'frigates' | 'destroyers' | 'cruisers' | 'battle-cruisers', string> = {
  frigates: 'Frigates',
  destroyers: 'Destroyers',
  cruisers: 'Cruisers',
  'battle-cruisers': 'Battle Cruisers',
}
