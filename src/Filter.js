import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function clickHandler(title) {
    setCategory(title);
  }

  return (
    <div className="flex justify-center gap-7 bg-slate-600">
      {filterData.map((data) => (
        <button
          onClick={() => clickHandler(data.title)}
          className="bg-slate-300 px-7 py-2 my-4 rounded-xl text-xl border-slate-900 hover:bg-slate-900 hover:text-white "
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
