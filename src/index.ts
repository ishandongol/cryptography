import { Caesar } from "./algorithms/caesar"

const awesomeFunction = async (...args: string[]) => {
  try {

    const shift = args[1]
    const op = args[0]
    const message = args[2]
    if (!shift || !op || !message) {
      throw new Error("Insufficient arguments")
    }
    const caesar = new Caesar({ shift: parseInt(shift, 10) })
    switch (op) {
      case 'ENCODE':
        console.log('Encoded message:', await caesar.endcode(message))
        break;
      case 'DECODE':
        console.log('Decoded message:', await caesar.decode(message))
        break;
      default:
        console.log('unknown')
    }
  } catch (err) {
    console.error(err)
  }

}
const args = process.argv;
awesomeFunction(args[2], args[3], args[4])