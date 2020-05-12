import { Cryptography } from "../interfaces/cryptography";
import { alphabetsMapToNumbers, numbersMapToAlphabets, alphabets } from './constants'
interface CaesarProps {
  shift: number
}
export class Caesar implements Cryptography {

  private shift: number

  constructor(props: CaesarProps) {
    this.validate(props);
    this.shift = props.shift
  }
  validate({ shift }: CaesarProps) {
    if (shift <= 0 || shift === alphabets.length) {
      throw new Error("Forbidden Shift Value")
    }
  }
  generate(op: 'en' | 'de', alphabet: string): string | undefined {
    const alphaNum = alphabetsMapToNumbers.get(alphabet)
    if (alphaNum === undefined) {
      return alphabet
    }
    if (op === 'en') {
      return numbersMapToAlphabets.get((alphaNum + this.shift) % alphabets.length)
    } else if (op === 'de') {
      let num = (alphaNum - this.shift) % alphabets.length
      if (num < 0) {
        num += alphabets.length
      }
      return numbersMapToAlphabets.get(num)
    }
    throw new Error(`Unknown Operation: ${op}`)
  }
  async mapMessage(op: 'en' | 'de', message: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const encodings: string[] = []
        for (let i = 0; i < message.length; i++) {
          const encodedAlphabet = this.generate(op, message.charAt(i))
          if (encodedAlphabet === undefined) {
            throw new Error(`Alphabet not found ${message.charAt(i)}`)
          }
          encodings.push(encodedAlphabet)
        }
        const processedMessage = encodings.join('')
        resolve(processedMessage)
      } catch (err) {
        reject(err)
      }
    })
  }
  async endcode(message: string): Promise<string> {
    return this.mapMessage('en', message)
  }
  async decode(message: string): Promise<string> {
    return this.mapMessage('de', message)
  }
}