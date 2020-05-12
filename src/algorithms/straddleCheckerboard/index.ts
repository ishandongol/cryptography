import { Cryptography } from "../../interfaces/cryptography";

interface StraddleCheckerboardProps {
  key: string;
}
export class StraddleCheckerboard implements Cryptography {
  constructor(props: StraddleCheckerboardProps) {

  }
  endcode(message: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  decode(message: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

}
