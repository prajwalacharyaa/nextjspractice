export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      Review {params.productId} for Product{params.reviewId}
    </h1>
  );
}
