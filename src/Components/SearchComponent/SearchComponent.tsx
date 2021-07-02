import React, { useState } from "react";
import ClearIcon from "../ClearIcon";

interface Props {
    handleSearch: (search: string) => void;
}

const SearchComponent = ({ handleSearch }: Props) => {
    const [search, setSearch] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const clearInput = (): void => {
        setSearch("");
    };

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(search);
        }
    };

    return (
        <div className="search-component">
            <label>Character name</label>

            <div>
                <div className="search-input-wrapper">
                    <input
                        onKeyPress={onEnter}
                        type="text"
                        value={search}
                        onChange={handleInput}
                    />
                    <span
                        onClick={clearInput}
                        className="clear-search"
                    >
                        <ClearIcon
                            width={12}
                            className="icon"
                        />
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => handleSearch(search)}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchComponent;
