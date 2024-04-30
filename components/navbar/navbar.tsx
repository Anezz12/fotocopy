import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/galery">Galery</Link>
        <Link href="/service">Service</Link>
      </div>
    </div>
  );
}

export default Navbar;
