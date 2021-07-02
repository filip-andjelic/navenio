import React, {useState} from "react";

import "./scss/main.scss";

import {Character} from "./services/api.interfaces";
import ApiService from "./services/api.service";

import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import Header from "./Components/Header/Header";
import SearchComponent from "./Components/SearchComponent/SearchComponent";

const App = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    const handleSearch = (search: string) => {
        try {
            ApiService.getCharacters(search).then((res) => {
                setCharacters(res.results);
            });
        } catch (e) {
            // Here we can trigger some info popup to the user or gracefully handle the error
            console.log(e);
        }
    };

    return (
        <div className="app">
            <Header/>

            <main>
                <SearchComponent handleSearch={handleSearch}/>

                <div className="characters-list">
                    {
                        !!characters.length && characters.map((char) => {
                            return <CharacterDetails character={char}/>;
                        })
                    }
                </div>
            </main>
        </div>
    );
};
export default App;
