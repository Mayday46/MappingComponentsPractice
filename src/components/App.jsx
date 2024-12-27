import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// 1.Create sperate Entry components.
// 2. Create props to replace hard coded data.
// 3a. Import the emojipedia const.
// 3b. Map through the emojipedia array and render Entry Components.

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      id={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
