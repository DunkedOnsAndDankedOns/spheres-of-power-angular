export const arrayToRecord = <K extends string | number | symbol,V>(arr: {key: K, value: V}[]): Record<K,V> => {
  return arr.reduce((acc, { key, value }) => {
    acc[key] = value
    return acc
  }, {} as Record<K,V>)
}
