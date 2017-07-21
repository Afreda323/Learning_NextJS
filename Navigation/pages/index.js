import Link from "next/link";

export default () => {
  return (
    <div>
      <Link href="/about">
        <a style={{ fontSize: 20 }}>About</a>
      </Link>
      <h1>This is the home page</h1>
    </div>
  );
};
