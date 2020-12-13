import React, { useState } from "react";
import './App.css';

var emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps",
  "☝": "Index Pointing Up",
  "✌": "Victory Hand",
  "🖐": "Hand with Fingers Splayed",
  "✍": "Writing Hand"
};

var emojiWeKnow = Object.keys(emojiDictionary);

function App() {
  var [emojiInput, setEmojiInput] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    setEmojiInput(emojiInput);

    if (emojiInput in emojiDictionary) {
      setMeaning(emojiDictionary[emojiInput]);
    } else if (emojiInput === "") {
      setMeaning("");
    } else {
      setMeaning("Unfortunately, its not a part of our database ");
    }
  }
  function emojiClickHandler(item) {
    setEmojiInput(item);
    setMeaning(emojiDictionary[item]);
  }
  return (
    <div className="App">
    <div className="display-flex">
      <img className="container-items img" src="smiley.jpg" alt="smiley" />
      <div className="container-items">
        <h1>Give me a sign!</h1>
        <h4>find out this gesture's meaning.</h4>
      </div>
    </div>
    <input
      id="emo-input"
      onChange={emojiInputHandler}
      placeholder="Enter or choose a hand gesture emoji"
    />
    <h1>{emojiInput}</h1>
    <h3>
      <i>{meaning}</i>
    </h3>
    <div className="display-flex">
      {emojiWeKnow.map((item) => (
        <div
          className="flex-items"
          key={item}
          onClick={() => emojiClickHandler(item)}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
