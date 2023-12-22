import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Loader from "./Loader";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      const result = await res.json();
      setCourses(result.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      <div className="w-11/12 mt-6 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]">{loading ? <Loader /> : <Cards courses={courses} category={category} />}</div>
    </div>
  );
};

export default App;
