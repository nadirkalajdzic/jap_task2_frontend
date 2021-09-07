import React from "react";

import Header from "../Header/Header";
import Container from "../Container/Container";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./Page.css";

import { Layout } from "antd";
const { Footer } = Layout;

function Page({ children, className }) {
  return (
    <div className={className}>
      <Header />
      <Container>{children}</Container>
      <Footer className="page-footer">
        <div className="page-footer-content">
          <div className="bold">MOVIESAPP</div>
          <div className="page-footer-sites">
            <div>About Us</div>
            <div>Terms and Conditions</div>
            <div>Support</div>
          </div>
          <div className="page-footer-icons">
            <div>
              <TwitterIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <FacebookIcon />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Page;
