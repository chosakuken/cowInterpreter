// VMは Singletonとして設計
class VM {
  // メンバ
  private static instance: VM | null;
  private address: number;
  private register: number | null;
  private memory: Map<number, number>;
  private constructor() {
    this.address = 0;
    this.register = null;
    this.memory = new Map<number, number>();
  }
  public static getInstance(): VM {
    this.instance ??= new VM();
    return this.instance;
  }
  // VM の初期化
  public initVM(): void {
    this.address = 0;
    this.register = null;
    this.memory.set(this.address, 0);
  }
  // メモリの読み出し
  public readMemory(): number {
    const memoryValue = this.memory.get(this.address);
    if (memoryValue === undefined) {
      throw new Error("Current memory undefined");
    }
    return memoryValue;
  }
  // メモリへの書き出し
  public writeMemory(input: number): void {
    this.memory.set(this.address, input);
  }
  // アドレス読み出し
  public readAddress(): number {
    return this.address;
  }
  // アドレス変更
  public writeAddress(input: number): void {
    this.address = input;
    if (this.memory.get(this.address) === undefined) {
      this.memory.set(this.address, 0);
    }
  }
  // レジスタ読み出し
  public readRegister(): number | null {
    return this.register;
  }
  // レジスタ書き込み
  public writeRegister(input: number | null): void {
    this.register = input;
  }
}

export { VM };
