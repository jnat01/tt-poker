
// export function isRoyalFlush(hand) {
  
// }

// export function isStraightFlush(hand) {

// }

export function isFourOfAKind(hand) {
  const rankCounts = countRanks(hand)
  
  return Object.values(rankCounts).includes(4)
}

// export function isFullHouse(hand) {

// }

// export function isFlush(hand) {

// }

// export function isStraight(hand) {

// }

export function isThreeOfAKind(hand) {
  const rankCounts = countRanks(hand)
  
  return Object.values(rankCounts).includes(3)
}

export function isTwoPair(hand) {
  const rankCounts = countRanks(hand)
  
  return Object.values(rankCounts).filter(count => count === 2).length === 2
}

export function isPair(hand) {
  const rankCounts = countRanks(hand)
  
  return Object.values(rankCounts).includes(2)
}

export function countRanks(hand) {
  const rankCounts = {}

  for (const card of hand) {
    const rank = card.rank
    rankCounts[rank] = (rankCounts[rank] || 0) + 1
  }

  return rankCounts
}
