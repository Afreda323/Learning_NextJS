import Link from "next/link";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";

export default () => {
  return (
    <Layout>
      <h1>This is the home page</h1>
      <ul>
        <PostLink id='hello-next' title="Hello Next.js" />
        <PostLink id='next-awesome' title="Next.js is awesome" />
      </ul>
    </Layout>
  );
};
