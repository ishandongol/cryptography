export interface Cryptography {
  endcode(message: string): Promise<string>
  decode(message: string): Promise<string>
}