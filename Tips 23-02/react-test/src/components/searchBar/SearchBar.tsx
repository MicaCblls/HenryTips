import { FC, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
}

const SearchBar: FC<SearchBarProps> = ({ handleInputChange, searchString }) => {
  return (
    <form
      className="w-full flex justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Type here"
        className="focus:outline-none input input-bordered border-nav/70 w-full max-w-xs md:max-w-lg bg-white text-nav"
        value={searchString}
        onChange={handleInputChange}
      />

      <button className="relative right-10">
        <IoIosSearch color="black" fontSize={32} />
      </button>
    </form>
  );
};

export default SearchBar;
