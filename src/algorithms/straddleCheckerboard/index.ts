import { Cryptography } from "../../interfaces/cryptography";

interface StraddleCheckerboardProps {
  key: string;
  sparePositions: number[]
}
export class StraddleCheckerboard implements Cryptography<StraddleCheckerboardProps> {
  private key: string;
  private array: string[][]
  private sparePositions: number[]
  constructor(props: StraddleCheckerboardProps) {
    this.validate(props)
    this.key = props.key
    this.sparePositions = props.sparePositions
    this.array = this.generateArray()
  }
  generateArray(): string[][] {
    const array: string[][] = []
    let position = 0
    for (let i = 0; i < 3; i++) {
      const innerArray: string[] = []
      for (let j = 0; j < 10; j++) {
        if (i === 0 && this.sparePositions.includes(j)) {
          innerArray.push('')
        } else {
          innerArray.push(this.key.charAt(position) || '')
          position += 1
        }
      }
      array.push(innerArray)
    }
    return array
  }
  validate({ key, sparePositions }: StraddleCheckerboardProps) {
    if (!key || !sparePositions || sparePositions.length < 2) {
      throw new Error("Validation Failed")
    }
  }
  async endcode(message: string): Promise<string> {
    let encodedMessage: string = ''
    for (let i = 0; i < message.length; i++) {
      this.array.forEach((innerArray, x) => {
        innerArray.forEach((alphabet, y) => {
          if (message.charAt(i) === alphabet) {
            if (x === 0) {
              encodedMessage += `${y}`
            } else {
              encodedMessage += `${this.sparePositions[x - 1]}${y}`
            }
          }
        })
      })
    }
    return encodedMessage
  }
  async decode(encodedMessage: string): Promise<string> {
    let message: string = ''
    let i = 0
    while (i < encodedMessage.length) {
      const first = parseInt(encodedMessage.charAt(i), 10)
      const second = parseInt(encodedMessage.charAt(i + 1) || '0', 10)
      if (this.sparePositions.includes(first)) {
        message += this.array[this.sparePositions.indexOf(first) + 1][second]
        i += 2
      } else {
        message += this.array[0][first]
        i += 1
      }
    }
    return message
  }

}
