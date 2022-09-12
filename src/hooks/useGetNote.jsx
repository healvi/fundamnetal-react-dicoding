import { useEffect, useState } from "react";
import { axiosauth } from "../utils/axios";

const useGetNote = () => {
  const [isLoading, setLoading] = useState(true);
  const [note, setNote] = useState([]);

  useEffect(() => {
    async function updateNote() {
      setLoading(true);
      await axiosauth("/notes").then((note) => {
        setLoading(false);
        setNote(note?.data?.data);
      });
    }

    updateNote();
  }, []);

  return { isLoading, note };
};

export default useGetNote;
