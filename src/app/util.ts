import Die from "src/types/Die"

export const arrayToRecord = <K extends string | number | symbol,V>(arr: {key: K, value: V}[]): Record<K,V> => {
  return arr.reduce((acc, { key, value }) => {
    acc[key] = value
    return acc
  }, {} as Record<K,V>)
}

export const BASEURL = 'http://localhost:3000'

export const Dice: Record<'d4'|'d6'|'d8'|'d10'|'d12'|'d20'|'d100', Die> = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
  d100: 100,
}
