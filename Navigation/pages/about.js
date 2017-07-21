import Link from "next/link";

export default () => {
  return (
    <div>
      <Link href="/index">
        <button style={{ fontSize: 20 }}>Home</button>
      </Link>
      <h1>This is the about page</h1>
    </div>
  );
};
