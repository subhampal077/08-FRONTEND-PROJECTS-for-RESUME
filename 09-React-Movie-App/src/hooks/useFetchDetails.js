import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useFetchDetails(endPoint, toastMsg) {
  const [data, setData] = useState([]);

  async function fetchDetails() {
    const toastId = toast.loading(`Fetching ${toastMsg}...`);
    try {
      const res = await axios.get(endPoint);
      //   console.log(res);
      setData(res?.data);

      // ------ setting ToastIfy -------- //
      toast.update(toastId, {
        render: `Fetched ${toastMsg} successfully!`,
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

  useEffect(() => {
    fetchDetails();
  }, [endPoint]);

  return data;
}

export default useFetchDetails;
