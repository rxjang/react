const friends = [
  { name: "Felix", age: 15 },
  { name: "Chan", age: 20 },
  { name: "Han", age: 25 },
  { name: "IN", age: 30 },
];

const timelines = [
  { desc: "Coding", likes: 0 },
  { desc: "JavaScript", likes: 10 },
  { desc: "React", likes: 20 },
  { desc: "Redux", likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriends = makeDataGenerator(friends);
export const getNextTimelines = makeDataGenerator(timelines);
