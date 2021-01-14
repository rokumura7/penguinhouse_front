export const getEnumArray = (
  enumType: { [key: number]: string } | { [key: string]: number }
): string[] => {
  return Object.entries(enumType)
    .map((arr) => arr[1])
    .filter((n) => !Number.isFinite(n))
}
