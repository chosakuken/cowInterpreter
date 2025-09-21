import { operator, parser } from "./cowInterpreter";
test("parser test01", () => {
  const res = parser("moo mOO hoge");
  expect(res).toEqual(expect.arrayContaining(["moo", "mOO"] as operator[]));
});
test("parser test02", () => {
  const res = parser(
    "              moo           mOo moO  mOO\nMoo\n\n\nMOo  \nMoO \tMOO\tOOO MMM OOM oom",
  );
  expect(res).toEqual(
    expect.arrayContaining([
      "moo",
      "mOo",
      "moO",
      "mOO",
      "Moo",
      "MOo",
      "MoO",
      "MOO",
      "OOO",
      "MMM",
      "OOM",
      "oom",
    ] as operator[]),
  );
});
