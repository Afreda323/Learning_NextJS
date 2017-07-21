import React from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";

export default props => {
  return (
    <Layout>
      <Content url={props.url} />
    </Layout>
  );
};
