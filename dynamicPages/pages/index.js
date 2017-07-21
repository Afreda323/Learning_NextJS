import Link from "next/link";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import fetch from "isomorphic-unfetch";

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(({ show }) =>
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>
                {show.name}
              </a>
            </Link>
          </li>
        )}
      </ul>
      
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(data);
  return {
    shows: data
  };
};

export default Index;
