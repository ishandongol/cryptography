import { Cryptography } from "../../interfaces/cryptography";

interface StraddleCheckerboardProps {
  key: string;
}
export class StraddleCheckerboard implements Cryptography<StraddleCheckerboardProps> {
  constructor(props: StraddleCheckerboardProps) {
    this.validate(props)
  }
  validate({ key }: StraddleCheckerboardProps) {
    if (!key) {
      throw new Error("Key is required")
    }
  }
  endcode(message: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  decode(message: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

}
