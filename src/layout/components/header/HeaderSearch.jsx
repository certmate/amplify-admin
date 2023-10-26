import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { AutoComplete, Input } from "antd";
import { SearchNormal1 } from 'iconsax-react';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

const renderTitle = (title) => (
	<span>
		{title}
		<a
			style={{ float: 'right' }}
			href="https://www.google.com/search?q=antd"
			target="_blank"
			rel="noopener noreferrer"
		>
			more
		</a>
	</span>
);

const renderItem = (title, count) => ({
	value: title,
	label: (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			{title}
			<span>
				<UserOutlined /> {count}
			</span>
		</div>
	),
});

export default function HeaderSearch(props) {
	const user = useSelector(state => state.user);

	const options = useMemo(() => [
		{
			label: renderTitle('Libraries'),
			options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
		},
		{
			label: renderTitle('Solutions'),
			options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
		},
		{
			label: renderTitle('Articles'),
			options: [renderItem('AntDesign design language', 100000)],
		},
	], [user]);


	return <AutoComplete
		popupClassName="certain-category-search-dropdown"
		popupMatchSelectWidth={500}
		options={options}
		size="large"
	/>
}