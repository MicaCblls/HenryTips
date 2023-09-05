import { FC } from "react";
import Product from "../../utils/products/Product.interface";

interface CardsProps {
  product: Product;
}

const Cards: FC<CardsProps> = ({ product }) => {
  const { name, code, price, image } = product;

  return (
    <div className="card card-side shadow-xl bg-white max-w-xs md:max-w-md h-60 transition duration-300 ease-in-out md:hover:scale-110">
      <figure className="h-60 w-60 ">
        <img
          src={image}
          alt={name}
          className="object-contain aspect-auto h-full"
        />
      </figure>
      <div className="card-body text-nav">
        <h2 className="card-title">{name}</h2>
        <p>{code}</p>
        <p className="text-lg font-medium">${price}.00</p>
      </div>
    </div>
  );
};

export default Cards;
