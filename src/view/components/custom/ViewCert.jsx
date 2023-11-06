import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../../common";
import { routes } from "../../../settings";
import DownloadCert from "./DownloadCert";
import { Spin } from "antd";

export default function ViewCert({ }) {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => { 
        (async () => {
            setData(await getData({ model: 'Cert', fields: routes["/certs"].form.read.fields, id }));
        })()
    }, [id])

    return <Spin spinning={!Boolean(data)}>
        { data && <DownloadCert data={data} hideButton={true} /> }
    </Spin>
}