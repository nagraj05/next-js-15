import Link from "next/link"

export default function Products() {
  return (
    <div>
      <Link href={"/"}>Back</Link>
      <h1>List of Products</h1>
      <p><Link href={"/products/1"}>Product 1</Link></p>
      <p><Link href={"/products/2"}>Product 2</Link></p>
      <p><Link href={"/products/3"} replace>Product 3</Link></p>
    </div>
  );
}
