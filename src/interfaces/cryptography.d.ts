export interface Cryptography<T> {
  validate(props: T): void
  endcode(message: string): Promise<string>
  decode(message: string): Promise<string>
}