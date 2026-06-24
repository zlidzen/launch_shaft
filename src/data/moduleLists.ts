export type ModuleEntry = {
  id: number
  name: string
  ammo: string
}

export const moduleLists: Record<'high_slot' | 'mid_slot' | 'low_slot' | 'rig_slot' | 'implant_slot' | 'buster_slot', ModuleEntry[]> = {
  high_slot: [
    {id: 10629, name: "Rocket Launcher I", ammo: "Rockets"},
    {id: 499, name: "Light Missile Launcher I", ammo: "Light Missiles"},
    {id: 501, name: "Heavy Missile Launcher I", ammo: "Heavy Missiles"},
    {id: 20138, name: "Heavy Assault Missile Launcher I", ammo: "Heavy Assault Missiles"},
    {id: 25715, name: "Heavy Assault Missile Launcher II", ammo: "Heavy Assault Missiles"}
  ],
  mid_slot: [
    {id: 19814, name: "Phased Scoped Target Painter", ammo: "none"},
    {id: 35790, name: "Missile Guidance Computer II", ammo: "Missile Range Script"},
  ],
  low_slot: [
    { id: 12274, name: "Ballistic Control System I", ammo: "none" },
    { id: 22291, name: "Ballistic Control System II", ammo: "none" },
    { id: 35770, name: "Missile Guidance Enhancer I", ammo: "none" },
    { id: 35771, name: "Missile Guidance Enhancer II", ammo: "none" },
  ],
  rig_slot: [
    { id: 31622, name: "Medium Warhead Calefaction Catalyst I", ammo: "none"},
    { id: 31588, name: "Medium Bay Loading Accelerator I", ammo: "none" },
    { id: 31600, name: "Medium Hydraulic Bay Thrusters I", ammo: "none" },
  ],
  'implant_slot': [
  ],
  'buster_slot': [
  ],

}

export const moduleSectionTitles: Record<'high_slot' | 'mid_slot' | 'low_slot' | 'rig_slot' | 'implant_slot' | 'buster_slot', string> = {
  high_slot: 'High Slots',
  mid_slot: 'Medium Slots',
  low_slot: 'Low Slots',
  rig_slot: 'Rig Slots',
  implant_slot: 'Implant Slots',
  buster_slot: 'Buster Slots',
}