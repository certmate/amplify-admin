import { Link } from "react-router-dom";

import { Dropdown, Col, Divider, Row } from "antd";
import { UserOctagon, Flag, Calendar, Calculator, AddCircle, Profile, Logout } from 'iconsax-react';
import { Auth } from 'aws-amplify';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import avatarImg from "../../../assets/images/memoji/user-avatar-4.png";

export default function HeaderUser() {

	const items = [
		{
			key: '2',
			label: (
				<p className="hp-p1-body hp-font-weight-500 hp-hover-text-color-danger-2 hp-mb-0">
					Log out
				</p>
			),
			icon: <Logout color="red" />,
			onClick: () => Auth.signOut().then(() => window.location.href = '/')
		}
	];

	return (
		<Col>
			<Dropdown
				menu={{
					items,
				}}
				trigger="click"
			>
				<a onClick={(e) => e.preventDefault()}>
					<Profile variant="TwoTone" size={32} color="#4735df" />
				</a>
			</Dropdown>
		</Col>
	);
};
