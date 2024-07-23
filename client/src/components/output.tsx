import { useEffect, useState } from "react";
import { serverURL } from "../helpers/constant";
import axios from "axios";

interface UrlData{
  _id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Output() {
  const [data, setData] = useState<UrlData[]>([]);

  const fetchData = async () => {
    const response = await axios.get(`${serverURL}/shorten`);
    console.log(response)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <section className='output-section'>
    </section>
  )
}