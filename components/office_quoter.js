import style from "../styles/OfficeQuoter.module.css";
import { useState } from "react";
import OfficeQuoteCard from "./office_quote_card";

export default function OfficeQuoter() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const increaseQuoteIndex = () =>
    setQuoteIndex(quoteIndex >= quotes.author.length - 1 ? 0 : quoteIndex + 1);
  const [quotes] = useState({
    text: [
      "Most people don’t even know that a candy cane represents a shepherd’s crook. Which I assure you does not taste like peppermint. It tastes like sheep feces.",
      "There is no such thing as an appropriate joke, that’s why it’s a joke.",
      "Thats what she said",
      "I’ve been involved in a number of cults both as a leader and a follower. You have more fun as a follower but you make more money as a leader.",
      "How are you not murdered every hour?",
      "I don’t come up with this stuff, I just forward it along. You wouldn’t arrest the guy who was just passing drugs from one guy to another.",
      "I am about to do something very bold in this job that I’ve never done before … try.",
      "I have six roommates, which are better than friends because they have to give you one month’s notice before they leave.",
      "I have a lot of questions. Number one, how dare you?",
      "I have been trying to get on jury duty every year since I was 18 years old. To get and go sit in an air-conditioned room, downtown, judging people, while my lunch was paid for. That is the life.",
    ],
    author: [
      "Dwight Schrute",
      "Ryan Howard",
      "Micheal Scott",
      "Creed Bratton",
      "Andy Bernard",
      "Micheal Scott",
      "Jim Halpert",
      "Toby Flenderson",
      "Kelly Kapoor",
      "Stanley Hudson",
    ],
  });
  return (
    <div class={style.container}>
      <div class={style.main}>
        <h1>The Office Quote Generator</h1>
        <OfficeQuoteCard
          quote={quotes.text[quoteIndex]}
          author={quotes.author[quoteIndex]}
        ></OfficeQuoteCard>

        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={increaseQuoteIndex}
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}
