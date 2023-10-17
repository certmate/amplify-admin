import { useNavigate } from "react-router-dom";
import { Space } from "antd";
import { entries, uniqueId } from "lodash";
import Pill from "../components/Pill";
import { RoleRouteFilter } from "../../helpers";
import { useSelector } from "react-redux";

export default function Filters({ filters }) {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    return filters ? <Space>
        {entries(filters).filter(([_, { roles }]) => RoleRouteFilter(roles, [], user, null)).map(([key, { name, roles }], index) => <Pill index={index} key={uniqueId()} label={name} onClick={() => navigate(`?filter=${key}`)} />)}
    </Space> : null
}