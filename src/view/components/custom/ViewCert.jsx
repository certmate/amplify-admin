import { useParams } from "react-router-dom";

export default function ViewCert({ }) {
    const { id } = useParams();

    return <>id: {id}</>
}