import { VM } from "./esolangVM";
test("init test", () => {
  const vm = VM.getInstance();
  vm.initVM();
  expect(vm.readAddress()).toBe(0);
  expect(vm.readRegister()).toBe(null);
  expect(vm.readMemory()).toBe(0);
});
test("memory increment", () => {
  const vm = VM.getInstance();
  vm.initVM();
  vm.writeMemory(vm.readMemory() + 1);
  expect(vm.readMemory()).toBe(1);
});
test("memory decrement", () => {
  const vm = VM.getInstance();
  vm.initVM();
  vm.writeMemory(vm.readMemory() - 1);
  expect(vm.readMemory()).toBe(-1);
});
test("address increment", () => {
  const vm = VM.getInstance();
  vm.initVM();
  vm.writeAddress(vm.readAddress() + 1);
  expect(vm.readAddress()).toBe(1);
});
test("address idecrement", () => {
  const vm = VM.getInstance();
  vm.initVM();
  vm.writeAddress(vm.readAddress() - 1);
  expect(vm.readAddress()).toBe(-1);
});
test("address -> memory", () => {
  const vm = VM.getInstance();
  vm.initVM();
  vm.writeAddress(100);
  vm.writeMemory(100);
  expect(vm.readAddress()).toBe(100);
  expect(vm.readMemory()).toBe(100);
});
