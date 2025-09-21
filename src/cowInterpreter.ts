type operator =
  | "moo"
  | "mOo"
  | "moO"
  | "mOO"
  | "Moo"
  | "MOo"
  | "MoO"
  | "MOO"
  | "OOO"
  | "MMM"
  | "OOM"
  | "oom";

function parser(input: string): operator[] {
  return input
    .trim()
    .split(/\s+/)
    .map((ele) => ele as operator);
}
export { operator, parser };
