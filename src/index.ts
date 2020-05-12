import { Caesar } from "./algorithms/caesar"
import { StraddleCheckerboard } from "./algorithms/straddleCheckerboard"

const caesarFunction = async (...args: string[]) => {
  try {

    const shift = args[1]
    const op = args[0]
    const message = args[2]
    if (!shift || !op || !message) {
      throw new Error("Insufficient arguments")
    }
    const caesar = new Caesar({ shift: parseInt(shift, 10) })
    const stradleCheckerboard = new StraddleCheckerboard({ key: 'sdlmzyoxpftegnjrvcihbqakwu', sparePositions: [6, 7] })
    switch (op) {
      case 'ENCODE':
        // console.log('Encoded message:', await caesar.endcode(message))
        console.log("Encoded: ", await stradleCheckerboard.endcode(message))
        break;
      case 'DECODE':
        // console.log('Decoded message:', await caesar.decode(message))
        console.log("Decoded: ", await stradleCheckerboard.decode(message))
        break;
      default:
        console.log('unknown')
    }
  } catch (err) {
    console.error(err)
  }

}
const args = process.argv;
caesarFunction(args[2], args[3], args[4])
