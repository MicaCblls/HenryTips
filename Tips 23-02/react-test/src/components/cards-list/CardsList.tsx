import { FC } from "react";
import Cards from "../cards/Cards";
import Product from "../../utils/products/Product.interface";
import Loading from "../loading/Loading";

interface CardsListProps {
  products: Product[];
}

const CardsList: FC<CardsListProps> = ({ products }) => {
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row flex-wrap gap-8 p-5">
      {products.length > 0 ? (
        products?.map((product, index) => (
          <Cards product={product} key={product.name + index} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CardsList;
