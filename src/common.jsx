// TODO Enter common actions here
import { Space } from "antd";
import { Building, DocumentText1, Profile, Profile2User, ProfileAdd, Trash, Truck } from "iconsax-react";
import { deleteColumn } from "./actions";

export const deleteRecord = {
    label: <Space><Trash size={24} /> Delete</Space>,
    fx: deleteColumn
}