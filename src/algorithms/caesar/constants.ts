import { alphabets } from "../constants"

const alphabetsMapToNumbers = new Map<string, number>()
const numbersMapToAlphabets = new Map<number, string>()

alphabets.forEach((alphabet, index) => {
  alphabetsMapToNumbers.set(alphabet, index)
  numbersMapToAlphabets.set(index, alphabet)
})

export { alphabetsMapToNumbers, numbersMapToAlphabets }