// SearchButton.tsx
import React from "react";
import { useSearch } from "../store/hooks";
import { Baby } from "../types";

const SearchButton: React.FC = () => {
    const { filteredNames } = useSearch();

    return (
        <div>
            <h3>Results</h3>
            <ul>
                {filteredNames.length > 0 ? (
                    filteredNames.map((baby: Baby) => (
                        <li key={baby.id}>
                            {baby.id} - {baby.name}
                        </li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
};

export default SearchButton;
