import { useEffect, useState } from "react";
import { axiosauth } from "../utils/axios";
import PropTypes from "prop-types";
const useGetDetailsNote = (id) => {
  const [isLoading, setLoading] = useState(true);
  const [note, setNote] = useState({});

  useEffect(() => {
    async function updateNote() {
      setLoading(true);
      await axiosauth.get(`/notes/${id}`).then((note) => {
        setLoading(false);
        setNote(note?.data?.data);
      });
    }

    updateNote();
  }, []);

  return { isLoading, note };
};

useGetDetailsNote.propTypes = {
  id: PropTypes.string,
};

export default useGetDetailsNote;
