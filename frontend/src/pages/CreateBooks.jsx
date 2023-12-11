import React, {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import BackButton from '../com'
import { useNavigate } from "react-router-dom";


const CreateBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
    .get('http://localhost:5555/books')
    .then((response) => {
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex justify-between items-center">
        <Link to='/'>
          <MdOutlineAddBox className="text-sky-800 text-4x"/>
        </Link>
    </div>
  )
}

export default CreateBooks