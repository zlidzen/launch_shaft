import rawKillmails from '../../data/zkb_raw_caracal.json'

export const Position = {
  high: 0,
  mid: 1,
  low: 2,
  rig: 3,
  subsystem: 4,
  droneBay: 5,
  cargo: 6,
} as const

export type Position = (typeof Position)[keyof typeof Position]

export type ShipItem = {
  type_id: number
  quantity: number
  flag: number
  position: Position
}

export type ShipStats = {
  character_id: number
  items: ShipItem[]
}

export type CaracalStats = {
  cashData: Date
  ship_type_id: number
  shipsCollection: ShipStats[]
}

type RawKillmailItem = {
  flag: number
  item_type_id: number
  quantity_destroyed?: number
  quantity_dropped?: number
}

type RawKillmailVictim = {
  character_id?: number
  items?: RawKillmailItem[]
}

type RawKillmail = {
  victim?: RawKillmailVictim
}

const mapFlagToPosition = (flag: number): Position => {
  switch (flag) {
    case 11:
      return Position.high
    case 12:
      return Position.mid
    case 13:
      return Position.low
    case 14:
      return Position.rig
    case 15:
      return Position.subsystem
    case 16:
      return Position.droneBay
    case 5:
      return Position.cargo
    default:
      return Position.cargo
  }
}

const buildItems = (victim?: RawKillmailVictim): ShipItem[] => {
  const aggregatedItems = new Map<number, ShipItem>()

  for (const item of victim?.items ?? []) {
    const quantity = (item.quantity_destroyed ?? 0) + (item.quantity_dropped ?? 0)

    if (quantity <= 0) {
      continue
    }

    const existing = aggregatedItems.get(item.item_type_id)

    if (existing) {
      existing.quantity += quantity
    } else {
      aggregatedItems.set(item.item_type_id, {
        type_id: item.item_type_id,
        quantity,
        flag: item.flag,
        position: mapFlagToPosition(item.flag),
      })
    }
  }

  return Array.from(aggregatedItems.values())
}

export const parseShipStats = (killmails: RawKillmail[]): ShipStats[] =>
  killmails.map((killmail) => ({
    character_id: killmail.victim?.character_id ?? 0,
    items: buildItems(killmail.victim),
  }))

export const caracalStats: CaracalStats = {
  cashData: new Date(),
  ship_type_id: 621,
  shipsCollection: parseShipStats(rawKillmails as RawKillmail[]),
}

