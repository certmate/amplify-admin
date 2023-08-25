import React from "react";

import { Divider, Row, Col } from "antd";

import { useSelector } from "react-redux";
import { role } from "../../../../helpers";

export default function MenuFooter(props) {
	const user = useSelector(state => state.user)

	return (
		props.collapsed === false ? (
			<Row
				className="hp-sidebar-footer hp-bg-color-dark-90"
				align="middle"
				justify="space-between"
			>
				<Divider className="hp-border-color-black-40 hp-border-color-dark-70 hp-mt-0" />

				<Col>
					<Row align="middle">

						<div className="hp-mt-6">
							<span className="hp-d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body" style={{ lineHeight: 1 }}>
								{user?.cognito?.attributes.email.split('@')[0]}
							</span>
							<span className="hp-d-block hp-text-color-primary-1 hp-font-weight-800 hp-mt-8" style={{ lineHeight: 1 }}>
								{role(user?.cognito)}
							</span>
						</div>
					</Row>
				</Col>
			</Row>
		) : null
	);
};