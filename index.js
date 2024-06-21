function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
  string.toLowerCase();
}

const string = "Hello";
console.log(string);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    console.log("I can't hear you!");
    return "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    console.log("YES INDEED!");
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    console.log("I would love to!");
    return "I would love to!";
  }
}

sayHiToHeadphonedRoommate(string.toLowerCase());
sayHiToHeadphonedRoommate(string.toUpperCase());
sayHiToHeadphonedRoommate("Let's have dinner together!");
