import React from "react";

export default function SearchBar() {

  const inputRef = React.createRef()

  function onKeyPressed(event) {
    if(event.key === 'Enter') {
      console.log(inputRef.current.value)
    }
  }

  return (
    <div className="px-20 py-6">
      <input ref={inputRef}
       className="w-1/2 p-4 bg-transparent text-8xl font-bold font-display text-white focus:outline-none border-b-2 border-gray-700"
       type="text" maxLength={10} autoFocus={true} onKeyPress={onKeyPressed} />
    </div> 
  );
}