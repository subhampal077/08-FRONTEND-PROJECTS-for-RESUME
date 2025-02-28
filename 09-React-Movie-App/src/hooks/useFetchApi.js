import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// --- endURL as a string --- //
export function useFetchApi(endURL, toastMsg = "Movies") {
  const [data, setData] = useState([]);

  async function fetchApiData() {
    const toastId = toast.loading(`Fetching ${toastMsg}...`);
    try {
      const res = await axios.get(endURL);
      setData(res.data.results);

      toast.update(toastId, {
        render: `${toastMsg} fetched!`,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      toast.update(toastId, {
        render: `Failed fetching ${toastMsg}!`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }

  useEffect(() => {
    fetchApiData();
  }, [endURL]);

  return data;
}
