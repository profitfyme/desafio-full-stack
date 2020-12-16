export interface EncrypterComparer {
  compare: (value: string, hash: string) => Promise<boolean>
}
