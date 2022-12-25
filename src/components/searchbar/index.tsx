import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import './style.scss';

interface Props {
    onSearch: (searchText: string) => void;
    placeholder?: string;
}

const SearchBar = ({ placeholder = "Search", onSearch }: Props) => {
    const [searchText, setSearchText] = useState("");
    return (
        <Paper
            component="form"
            className="paper-view"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder}
                inputProps={{ "aria-label": "search google maps" }}
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    onSearch(e.target.value);
                }}
            />
            <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => onSearch(searchText)}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
