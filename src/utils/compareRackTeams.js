export const compare = (a, b) => {
  if (a.rank < b.rank) {
    return -1
  }
  if (a.rank > b.rank) {
    return 1
  }
  return 0
}
