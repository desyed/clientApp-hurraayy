import Link from "next/link";
import {
  Menu,
  Icon,
  Drawer,
  Button,
  Row,
  Col,
  Input,
  Radio,
  Select,
  DatePicker
} from "antd";
import { withRouter } from "next/router";
import { useState } from "react";
import HeroAvatar from "../hero-avatar";
import "./style.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Option } = Select;
const { Search } = Input;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="uk-container uk-container-small">
      <div className="hero-section">
        <Row>
          <Col span={18}>
            <Radio.Group defaultValue="a" size="small">
              <Radio.Button value="a">All</Radio.Button>
              <Radio.Button value="b">Accomodation</Radio.Button>
              <Radio.Button value="c">Adventure</Radio.Button>
              <Radio.Button value="d">Experience</Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={6} className="uk-text-right">
            {/* <DatePicker size="small" /> */}
            <Select
              defaultValue="lucy"
              style={{ width: 90 }}
              //   onChange={handleChange}
              size="small"
            >
              <Option value="lucy">Dates</Option>
              <Option value="Yiminghe">hi</Option>
            </Select>
            <Select
              defaultValue="lucy"
              style={{ width: 90 }}
              //   onChange={handleChange}
              size="small"
            >
              <Option value="lucy">Guest</Option>
              <Option value="Yiminghe">hi</Option>
            </Select>
          </Col>
          <Col span={24} className="uk-margin-small-top">
            <Search
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Type here"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col span={24} className="uk-margin-large-top uk-text-center">
            <h1 className="uk-heading-small">Explore the World</h1>
            <p className="uk-text-meta">lorem inpum do isep</p>
            <div className="uk-child-width-expand@s uk-text-center uk-grid uk-margin-medium-top">
              <HeroAvatar size={200} txt="Accomodation" />
              <HeroAvatar size={200} txt="Adventure" />
              <HeroAvatar size={200} txt="Experience" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
