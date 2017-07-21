import React from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";
import fetch from 'isomorphic-unfetch'

const Post = ({show}) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
       <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={show.image.medium}/>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};
export default Post