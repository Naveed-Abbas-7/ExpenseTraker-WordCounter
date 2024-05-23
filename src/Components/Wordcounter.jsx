import React, { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalWords = text.split(" ").filter((items) => {
      return items;
    });
    setWords(totalWords.length);
  };

  const charactorcount = text.length;
  let totalWords = text.split(" ").filter((items) => {
    return items;
  });
  const wordscount = totalWords.length;

  return (
    <>
      <div className=" flex  text-center justify-center p-[5rem]">
        <form className="" action="" onSubmit={handleSubmit}>
          <textarea
            value={text}
            name=""
            id=""
            cols="50"
            rows="10"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <button className="w-[40%] bg-orange-600 rounded-xl py-2 mt-4">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <button className="w-[70%] bg-orange-700 text-white py-3 rounded-lg">
          {charactorcount}
        </button>
        <button className="w-[70%] bg-orange-700 text-white py-3 rounded-lg mb-4  ">
          {wordscount}
        </button>
      </div>
    </>
  );
};

export default Textarea;
