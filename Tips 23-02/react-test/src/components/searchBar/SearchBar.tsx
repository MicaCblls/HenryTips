import { FC, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
}

const SearchBar: FC<SearchBarProps> = ({ handleInputChange, searchString }) => {
  return (
    <div className="flex justify-center items-center py-4">
      <form
        className="w-full flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Type here"
          className="focus:outline-none input input-bordered border-nav/70 w-full bg-white text-nav"
          value={searchString}
          onChange={handleInputChange}
        />

        <IoIosSearch
          color="black"
          fontSize={32}
          className="relative right-10"
        />
      </form>
    </div>
  );
};

export default SearchBar;
