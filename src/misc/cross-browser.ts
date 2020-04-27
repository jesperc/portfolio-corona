export const flatMap = (list: any[]): any[] => {
  return list.reduce((acc, val) => acc.concat(val), [])
}
