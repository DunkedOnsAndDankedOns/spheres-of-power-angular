import Stat from "src/types/Stat"

type Drawbacks = Record<string, string>
type Boons = Record<string, string>

export default interface Tradition {
  _id?: string
  name: string
  drawbacks: Drawbacks
  boons: Boons
  keyAbility: Stat
}
