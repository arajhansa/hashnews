import axios from "axios";
import React from "react";

export default function SearchBar() {

  const inputRef = React.createRef()

  async function onKeyPressed(event) {
    if(event.key === 'Enter') {
      const word = inputRef.current.value 
      const response = await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
        headers: {
          "X-RapidAPI-Key": "HCvewCUcStmshIRVdmehbQUen56Pp1dGrCNjsnwesEfsBmUcKW"
        }
      })
      console.log(response.data.definitions[0].definition)
    }
  }

  return (
    <div className="px-20 py-6">
      <input ref={inputRef}
       className="w-1/2 p-4 bg-transparent text-8xl font-bold font-display text-white focus:outline-none border-b-2 border-gray-800"
       type="text" maxLength={10} autoFocus={true} onKeyPress={onKeyPressed} />
    </div> 
  );
}