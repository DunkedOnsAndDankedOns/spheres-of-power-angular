import Die from "src/types/Die"
import Level from "src/types/Level"
import Stat from "src/types/Stat"

interface Feature {
  name: string
  level: Level
  description: string
}

export default interface CharacterClass {
  _id?: string
  name: string
  hitDie: Die

  savingThrows: Stat[][]

  features: Feature[]
  specializations: Record<string, Feature[]>
  
  magicTalents: Record<Level, number>
  spellPoints: Record<Level, number>

  classAbilityDie?: Record<Level, Die>
}
