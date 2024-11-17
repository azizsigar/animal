import React, { ChangeEvent } from "react";
import { useSearch } from "../store/hooks"; // Import the custom hook
import SearchButton from "./SearchButton";

const SearchArea: React.FC = () => {
    const { setSearchQuery } = useSearch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <h2>Search Area</h2>
            <input
                type="text"
                placeholder="Search for a name..."
                onChange={handleChange}
            />
            <SearchButton />
        </div>
    );
};

export default SearchArea;
