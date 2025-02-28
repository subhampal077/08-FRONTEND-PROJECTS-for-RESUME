import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  // console.log(params);

  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(2);

  // PARAMS IN FETCH REQUEST-------------
  //   const params = new URLSearchParams({ query: 'react', limit: 10 });
  // const url = `https://api.example.com/data?${params.toString()}`;

  async function fetchData(page) {
    const toastId = toast.loading(`Fetching ${params.explore} shows...`);
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: page,
        },
      });
      // console.log(res.data);

      setData((prev) =>
        pageNo === 1 ? res.data.results : [...prev, ...res.data.results]
      );

      setTotalPages(res?.data.total_pages);

      // ------ setting ToastIfy -------- //
      toast.update(toastId, {
        render: `Fetched ${params.explore} shows!`,
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
    fetchData(1);
  }, [params]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ToastContainer />

      {data?.length > 0 && (
        <div className="pt-14 px-3 md:px-12 pb-6">
          <h3 className="capitalize text-xl md:text-2xl font-bold mb-4 my-3 md:my-5">
            discover {params.explore} shows
          </h3>

          <div className="grid place-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-6">
            {data.map((item, i) => {
              return <Card key={i} data={item} mediaType={params.explore} />;
            })}
          </div>
        </div>
      )}

      {pageNo >= totalPages ? (
        <p className="font-semibold my-5 mx-3 text-lg text-red-600">
          You have Reached the Limit !!
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExplorePage;
