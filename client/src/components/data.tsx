import { useEffect, useState } from "react";
import { serverURL } from "../helpers/constant";
import axios from "axios";
import {Table} from "./tableProp";
import {UrlData} from "../interfaces/urlData"
import {Form} from "./form";

export default function Output() {
  const [data, setData] = useState<UrlData[]>([]);
  const [reload, setReload] = useState<Boolean>(false);

  const fetchData = async () => {
    const response = await axios.get(`${serverURL}/shorten`);
    setData(response.data.shortUrls);
    setReload(false);
  }

  const updateReloadState = ():void => {
    setReload(true);
  }

  useEffect(() => {
    fetchData();
  }, [reload])

  return (
    <main>
      <Form updateReloadState={updateReloadState} />
      <Table updateReloadState={updateReloadState} data={data} />
    </main>
  )
}