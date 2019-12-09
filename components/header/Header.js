import Link from "next/link";
import { Menu, icon, Drawer, Button, Row, Col } from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import "./style.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = ({ mod }) => (
  <Menu mode={mod ? "inline" : "horizontal"}>
    <Menu.Item key="mail">
      <a href="">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Blogs</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>

    <Menu.Item key="alipay">
      <a href="">Contact Us</a>
    </Menu.Item>
  </Menu>
);

const Header = ({ router: { pathname } }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <header>
      <Row className="menuBar">
        <Col span={6}>
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <a href="">Logo</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={18}>
          <div className="rightMenu">
            <RightMenu />
          </div>

          <div className="barsMenu" type="primary" onClick={showDrawer}>
            <Menu mode="horizontal">
              <Menu.Item key="mail">munu</Menu.Item>
            </Menu>
          </div>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <RightMenu mod={1} />
          </Drawer>
        </Col>
      </Row>
      {/* <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>
    <Link href="/blog">
      <a className={pathname === "/blog" ? "is-active" : ""}>Blog</a>
    </Link> */}
    </header>
  );
};

export default withRouter(Header);
