import { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import CardsList from "../components/cards-list/CardsList";
import { getProducts } from "../utils/products/getProducts";
import Product from "../utils/products/Product.interface";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const debouncedSearchString = useDebounce(searchString);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchString(value.toLowerCase());
  };

  useEffect(() => {
    setTimeout(async () => {
      const products: Product[] = await getProducts();
      setProducts(products);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log(searchString, "handle");
    const searchProducts = () => {
      if (debouncedSearchString?.length) {
        console.log("entre", debouncedSearchString);

        const filteredProducts = [...products].filter((prod) =>
          prod.name.toLowerCase().includes(debouncedSearchString)
        );

        if (filteredProducts.length > 0) {
          setFilteredProducts(filteredProducts);
        } else {
          setFilteredProducts(products);
        }
      } else {
        setSearchString("");
        setFilteredProducts(products);
      }
    };
    searchProducts();
  }, [debouncedSearchString]);

  return (
    <div className="flex flex-col justify-between bg-teal50">
      <div className=" h-max py-4 flex justify-center items-center">
        <SearchBar
          handleInputChange={handleInputChange}
          searchString={searchString}
        />
      </div>
      <div
        className={`flex justify-center ${
          products.length > 0 ? "items-start" : "items-center"
        }`}
      >
        <CardsList
          products={filteredProducts?.length > 0 ? filteredProducts : products}
        />
      </div>
    </div>
  );
};

export default Home;
