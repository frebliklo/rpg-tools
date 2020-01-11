declare module 'ascii-table' {
  class AsciiTable {
    addRow(...args: string[]): void

    setHeading(...args: string[]): void

    toString(): string
  }

  export default AsciiTable
}
