import React, { useRef, useState } from "react";

import { Layout, Button, Row, Col } from "antd";
import { CloseSquare, Menu, SearchNormal, SearchNormal1 } from 'iconsax-react';
import { motion } from 'framer-motion';

import HeaderSearch from './HeaderSearch';
import HeaderUser from "./HeaderUser";
import HeaderNotifications from "./HeaderNotifications";
import HeaderText from "./HeaderText";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

export default function MenuHeader(props) {
  const { setVisible } = props;
  const navigate = useNavigate();

  const [searchHeader, setSearchHeader] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Search Active
  setTimeout(() => setSearchActive(searchHeader), 100);

  const searchClick = () => {
    setSearchHeader(true)
  }

  // Mobile Sidebar
  const showDrawer = () => {
    setVisible(true);
    setSearchHeader(false);
  };

  // Children
  const headerChildren = () => {
    return (
      <Row
        className="hp-w-100 hp-position-relative"
        align="middle"
        justify="space-between"
      >
        <Col className="hp-mobile-sidebar-button hp-mr-24">
          <Button
            type="none"
            ghost
            className="hp-mobile-sidebar-button hp-border-none"
            onClick={showDrawer}
            icon={<Menu size={24} color="#000" />}
          />
        </Col>

        {!searchHeader && (
          <HeaderText />
        )}

        <Col>
          <Row align="middle">
            <Col style={{marginRight: 12}}>
              <SearchNormal variant="TwoTone" size={28} color="#4735df" onClick={() => navigate('/search')} />
            </Col>
            <HeaderUser />
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <Header>
      <Row justify="center" className="hp-w-100">
        <Col span={24}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
            className="hp-w-100"
          >
            {headerChildren()}
          </motion.div>
        </Col>
      </Row>
    </Header>
  );
};