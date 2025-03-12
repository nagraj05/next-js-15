import { Metadata } from "next";

type Props = {
  params: { productId: string };  
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;  

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = params.productId; 
  return <div>Details about {productId}</div>;
}
