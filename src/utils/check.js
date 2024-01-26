import rankValue from "@/constants/rankValue"

export function isRoyalFlush(hand) {
  return isStraightFlush(hand) && hand.every(card => getCardValue(card.rank) >= 10)
}

export function isStraightFlush(hand) {
  return isStraight(hand) && isFlush(hand)
}

export function isFourOfAKind(hand) {
  const rankCounts = countRanks(hand)
  
  return Object.values(rankCounts).includes(4)
}

export function isFullHouse(hand) {
  const rankCounts = countRanks(hand)

  return Object.values(rankCounts).includes(3) && Object.values(rankCounts).includes(2)
}

export function isFlush(hand) {
  return hand.every(card => card.suit === hand[0].suit)
}

export function isStraight(hand) {
  const rankSorted = hand.map(card => getCardValue(card.rank)).sort((a, b) => a - b)
  const rankCounts = countRanks(hand)

  return rankSorted[4] - rankSorted[0] === 4 && Object.keys(rankCounts).length === 5
}

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

function countRanks(hand) {
  const rankCounts = {}

  for (const card of hand) {
    const rank = card.rank
    rankCounts[rank] = (rankCounts[rank] || 0) + 1
  }

  return rankCounts
}

function getCardValue(rank) {
  return rankValue[rank]
}
