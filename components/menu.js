import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/store">
          <a>Store</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </div>
      <div>
        <a href="#"> Cart(0)</a>
      </div>
    </nav>
  );
}
