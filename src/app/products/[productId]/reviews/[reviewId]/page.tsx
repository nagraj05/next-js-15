import { notFound } from "next/navigation";


export default async function ReviewId({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>this is product {productId}</h1>
      <h2>this is the review {reviewId}</h2>
    </div>
  );
}
