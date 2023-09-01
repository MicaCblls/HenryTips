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

  const clearSearch = () => {
    setFilteredProducts(products);
    setSearchString("");
  };

  useEffect(() => {
    setTimeout(async () => {
      const products: Product[] = await getProducts();
      setProducts(products);
    }, 3000);
  }, []);

  useEffect(() => {
    const searchProducts = () => {
      if (debouncedSearchString?.length) {
        const filteredProducts = [...products].filter((prod) =>
          prod.name.toLowerCase().includes(debouncedSearchString)
        );

        if (filteredProducts.length > 0) {
          setFilteredProducts(filteredProducts);
        } else {
          setFilteredProducts(products);
        }
      } else {
        clearSearch();
      }
    };
    searchProducts();
  }, [debouncedSearchString]);

  return (
    <div className="flex flex-col justify-between bg-teal50">
      <SearchBar
        handleInputChange={handleInputChange}
        searchString={searchString}
      />
      <div className="px-20 w-full">
        {searchString.length > 0 && debouncedSearchString.length > 0 && (
          <div className="rounded-md badge badge-info gap-2 bg-nav text-white">
            {debouncedSearchString.toUpperCase()}
            <button onClick={clearSearch}>X</button>
          </div>
        )}
        <p className="text-lg uppercase font-medium">
          {filteredProducts?.length ? filteredProducts.length : products.length}{" "}
          Resultados
        </p>
      </div>
      <CardsList
        products={filteredProducts?.length > 0 ? filteredProducts : products}
      />
    </div>
  );
};

export default Home;
