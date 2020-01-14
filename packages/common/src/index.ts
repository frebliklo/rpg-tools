export function getModifier(abilityScore: number): string {
  const modifier = Math.floor((abilityScore - 10) / 2)

  if (modifier === 0) return '0'

  return modifier > -1 ? `+${modifier.toString()}` : modifier.toString()
}
