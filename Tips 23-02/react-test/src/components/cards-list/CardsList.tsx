import { FC } from "react";
import Cards from "../cards/Cards";
import Product from "../../utils/products/Product.interface";
import Loading from "../loading/Loading";

interface CardsListProps {
  products: Product[];
}

const CardsList: FC<CardsListProps> = ({ products }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center sm:flex-row flex-wrap gap-4 py-4 md:gap-8 md:p-5`}
    >
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
