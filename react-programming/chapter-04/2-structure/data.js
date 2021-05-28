const FRIENDS = [
  { name: "Felix", age: 22 },
  { name: "Chan", age: 25 },
  { name: "IN", age: 21 },
  { name: "Han", age: 22 },
];

let nextId = 0;

export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
