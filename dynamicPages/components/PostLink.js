import React from "react";
import Link from "next/link";
const PostLink = props => {
  return (
    <li>
      <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
        <a>
          {props.title}
        </a>
      </Link>
    </li>
  );
};

export default PostLink;
