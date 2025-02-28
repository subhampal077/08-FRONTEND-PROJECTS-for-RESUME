import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  // console.log(location);
  const query = new URLSearchParams(location.search).get("q");

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchData(page) {
    if (!query?.trim()) {
      setData([]);
      return;
    }

    const toastId = toast.loading(`Fetching data...`);
    try {
      const res = await axios.get("/search/multi", {
        params: {
          query: query && query,
          page: page,
        },
      });
      // console.log(res.data);

      setData((prev) =>
        pageNo === 1 ? res.data.results : [...prev, ...res.data.results]
      );
      setTotalPages(res?.data?.total_pages);

      // ------ setting ToastIfy -------- //
      toast.update(toastId, {
        render: `Fetched successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      toast.update(toastId, {
        render: `Error: ${err.message}!`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
      setPageNo((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (pageNo > 1) {
      fetchData(pageNo);
    }
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    const timeoutId = setTimeout(() => {
      fetchData(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ToastContainer />

      <div className="text-center pt-14 px-3 md:px-12 pb-6">
        <input
          className="mt-2 px-4 py-1 rounded-full outline-none bg-neutral-100 text-black border-2 max-w-sm w-full text-sm md:hidden"
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
        />

        <h3 className="text-left capitalize text-xl md:text-2xl font-bold mt-3 mb-4 md:my-5">
          Search Results
        </h3>

        {data?.length > 0 ? (
          <div className="grid place-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-6">
            {data.map((item, i) => {
              return <Card key={i} data={item} />;
            })}
          </div>
        ) : (
          <p className="mt-20">No Search Result found, Try Again !!</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
