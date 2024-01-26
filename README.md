# tt-poker

## Project
- `Node v20`
- `Vue3`
- `yarn`

## Steps
1. `git clone` this repo
2. `cd tt-poker`
3. `yarn` to install dependencies
4. `yarn serve` to compile for development (with hot reload) at `localhost:8080`


## Components
#### PlayingCard
- Component to render each individual playing card
- Will display the rank and suit based on props
- Uses unicode for the suit, albeit not pixel perfect at the moment since I wanted to use the clear and filled versions for suits to make it more engaging to view.

#### DeckOfCards
- Component to render the entire deck of cards.
- Will take an array of objects to iterate upon and render 52 `PlayingCard` components with a `v-for` loop
- This could have been done within the `PokerTable` but I prefer to abstract code when possible. Who knows, if this was a real casino then other tables may need decks too...

#### PlayerHand
- Component to render each players hand
- Will take an array of objects, after cards are dealt, to iterate upon and render 5 `PlayingCard` components per player
- This I felt warranted a separate component for sure so that the data did not get muddled within the PokerTable. Allowed for me to easily isolate what I needed to render each players hand and winner information.

#### PokerTable
- Where all the action happens!
- Used to render the above components as well as provide functionality to the application
- There are a variety of buttons that are linked to methods within the component
    - Create - Will generate the deck of cards and will be hidden once complete
    - Shuffle - Will shuffle the deck of cards and will be disabled once cards are dealt. Can continue to shuffle until dealt.
    - Deal Cards - Will deal 5 cards to each player, 1 card at a time and will be disabled once cards are dealt.
    - Find Winner(s) - Will evaluate each players hand to determine who is(are) the winner(s), and will be disabled once identified.
    - Reset - Will reset the PokerTable data and allow for the game to start fresh. Will not reset playerCount so that it's easier to re-deal with the same count as before.

## Constants
#### ranks
- Contains an array of the different ranks
- i.e. `'2', '3', ... , 'K', 'A'`

#### suits
- Contains an array of the different suits
- i.e. `'hearts', 'diamonds', 'clubs', 'spades',`

#### rankValue
- Contains an object of key:value pairs for each rank `rank:value`
- i.e. `'2': 2, '3': 3, ... , 'K': 13, 'A': 14`

#### handTypes
- Contains an object of key:value pairs for each hand `handScore:handType`
- i.e. `10: 'RoyalFlush', ... , 1: 'High Card'`
