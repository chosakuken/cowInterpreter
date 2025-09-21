// VMは Singletonとして設計
class VM {
    // メンバ
    private static instance: VM;
    private address: number;
    private register: number | null;
    private memory: Map<number, number>;
    private constructor() {
        this.address = 0;
        this.register = null;
        this.memory = new Map<number, number>();
    }
    public static getInstance(): VM {
        if (this.instance === null) {
            this.instance = new VM();
        }
        return this.instance;
    }
    public initVM(): void {
        this.address = 0;
        this.register = null;
        this.memory.set(this.address, 0);
    }
    // ブロックを1つ前に戻す
    public movebackBlock(): void {
        this.address -= 1;
        if (this.memory.get(this.address) === undefined) {
            this.memory.set(this.address, 0);
        }
    }
    // ブロックを1つ後に進める
    public moveforwardBlock(): void {
        this.address += 1;
        if (this.memory.get(this.address) === undefined) {
            this.memory.set(this.address, 0);
        }
    }
    // メモリをデクリメントする
    public decrementMemory(): void {
        const memoryValue = this.memory.get(this.address);
        if (memoryValue === undefined) {
            throw new Error("Current Memory Undefined");
        }
        this.memory.set(this.address, memoryValue - 1)
    }
    // メモリをインクリメントする
    public incrementMemory(): void {
        const memoryValue = this.memory.get(this.address);
        if (memoryValue === undefined) {
            throw new Error("Current Memory Undefined");
        }
        this.memory.set(this.address, memoryValue + 1)
    }
    // 現在のメモリを 0 に設定
    public setZero(): void {
        this.memory.set(this.address, 0);
    }
}