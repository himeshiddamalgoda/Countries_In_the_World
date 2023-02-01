import React from "react";

const SearchComponent = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}) => {
  return (
    <div className="p-1 mx-auto">
     
        <div className="relative mt-24 md:mt-20 flex   mx-auto w-full ">
          <input
            placeholder="Enter Country Name"
            type="text"
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-zinc-400  "
            onChange={onInputChange}
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-md max-h-screen overflow-y-scroll">
            {options?.map((option, index) => (
              <li key={index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer "
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name.common}
                  {/* {console.log(option)} */}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-md border-2 border-zinc-400 hover:border-zinc-500 hover:text-zinc-500 text-zinc-400 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            search
          </button>
        </div>
      
    </div>
  );
};

export default SearchComponent;
