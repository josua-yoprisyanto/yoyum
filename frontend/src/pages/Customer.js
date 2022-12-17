import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../assets/css/customer.css";
import Navbar from "../components/Navbar";
import CustomerContent from "../components/CustomerContent";
import { useParams } from "react-router-dom";
import { getStandMenuItem, getCustomerStand } from "../axios";
import { useDebounce } from "../hooks/useDebounce";
import HomeCard from "../components/HomeCard";
import { Row, Col, Container } from "react-bootstrap";

const Customer = () => {
  const params = useParams();

  const [scrollCondition, setScrollCondition] = useState("");
  const [menus, setMenus] = useState();
  const [searchFood, setSearchFood] = useState();
  const [stands, setStands] = useState();

  const search = useDebounce(searchFood, 500);

  useEffect(() => {
    const getStandMenu = async () => {
      const { data } = await getStandMenuItem({
        id: params.id,
        itemName: search,
      });
      setMenus(data.data.rows);
    };
    getStandMenu();
  }, [params, search]);

  useEffect(() => {
    const getStand = async () => {
      const { data } = await getCustomerStand();

      setStands(data.data);
    };
    getStand();
  }, []);

  return (
    <div className="customer">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="navigationBar">
        {params.id == undefined ? (
          <Container className="mt-3">
            <Row>
              {" "}
              {stands?.map((menu) => (
                <Col lg={3}>
                  <HomeCard menu={menu} />
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <>
            <Navbar
              scrollCondition={scrollCondition}
              setSearch={setSearchFood}
              search={searchFood}
            />
            <CustomerContent
              setScrollCondition={setScrollCondition}
              menus={menus}
            />
          </>
        )}
      </div>

      {/* <div className="navigationBar">
        <Navbar scrollCondition={scrollCondition} />
        <CustomerContent setScrollCondition={setScrollCondition} />
      </div> */}
    </div>
  );
};

export default Customer;
