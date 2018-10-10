export interface Memorygame {
  unmatchedPairs: number;
  deck: Array<any>;
  message: string;
  attempts: number;
  firstPick: any;
  secondPick: any;
  complete: boolean;
}

const MESSAGE_START = 'Click on the first tile to start your game.';
const MESSAGE_ONE_MORE = 'Pick one more card.';
const MESSAGE_MISS = 'Try again.';
const MESSAGE_MATCH = 'Good job! Keep going.';
const MESSAGE_WON = 'You win!';

export class Memorygame implements Memorygame {
  public unmatchedPairs: number;
  public deck: Array<any>;
  public message: string;
  public attempts: number;
  public firstPick: any;
  public secondPick: any;
  public complete: boolean;

  constructor(cards: Array<any>) {
    this.message = MESSAGE_START;
    this.init(cards);
  }

  init(cards: Array<any>): void {
    this.attempts = 0;
    this.unmatchedPairs = cards.length - 1;
    this.deck = this.randomizeDeck(
      cards.reduce((x, card) => {
        x.push({ ...card }, { ...card });
        return x;
      }, [])
    );
  }

  randomizeDeck(array: Array<any>): Array<any> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  selectCard(card: any): void {
    card.flipped = true;
    if (!this.firstPick || this.secondPick) {
      if (this.secondPick) {
        this.firstPick.flipped = false;
        this.secondPick.flipped = false;
        this.firstPick = null;
        this.secondPick = null;
      }
      this.firstPick = card;
      this.message = MESSAGE_ONE_MORE;
    } else if (this.firstPick && this.firstPick.name === card.name) {
      this.attempts++;
      this.unmatchedPairs--;

      if (this.unmatchedPairs > 0) {
        this.message = MESSAGE_MATCH;
      } else {
        this.complete = true;
        this.message = MESSAGE_WON;
      }
      this.firstPick = this.secondPick = undefined;
    } else {
      this.attempts++;
      this.secondPick = card;
      this.message = MESSAGE_MISS;
    }
  }
}
