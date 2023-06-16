import CatalogCards from '../components/CatalogCards';
import ManageCatalog from '../components/ManageCatalog';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Catalog() {
    const [characters, setCharacters] = useState([]);
    const [sortedCharacters, setSortedCharacters] = useState([]);
    const [sortingOption, setSortingOption] = useState("");
    const [message, setMessage] = useState("Loading character details ...");
    const API_URL = 'https://thronesapi.com/api/v2/Characters';
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(API_URL)
            .then(result => {
                // Get the total number of characters
                const totalCharacters = result.data.length;
                // Generate 20 random indexes
                const randomIndexes = randomTwenty(totalCharacters, 20);
                // Retrieve the characters based on the random indexes
                const randomCharacters = randomIndexes.map(index => result.data[index]);
                setCharacters(randomCharacters);
            })
            .catch(error => {
                setMessage('No characters found ...');
            });
        // '[]' ensures that the request is made only when the component mounts
    }, []);

    // Sort characters based on the current sorting option
    useEffect(() => {
        if (sortingOption === "title") {
            const sorted = [...characters].sort((a, b) => a.title.localeCompare(b.title));
            setSortedCharacters(sorted);
        } else if (sortingOption === "name") {
            const sorted = [...characters].sort((a, b) => a.fullName.localeCompare(b.fullName));
            setSortedCharacters(sorted);
        } else {
            setSortedCharacters(characters)
        }
    }, [characters, sortingOption]);

    // grab random indexes from the character array
    function randomTwenty(maxIndex, count) {
        const indexes = [];

        // keep adding indexes until the index array is full
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * maxIndex);
            // if the index is not already in the array add it
            if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
        }
        return indexes;
    }

    // Navigate to detail page if a card is clicked
    const handleClick = (character) => {
        // Use navigate function for redirection
        navigate(`/${character.id}`); 
    };
    
    // Navigate to detail page if a card is clicked
    const addNewItem = () => {
        console.log("here");
        // Use navigate function for redirection
        navigate(`/new-item`); 
    };

    // Handle sorting option change
    const handleSortOptionChange = useCallback((option) => {
        if (option === sortingOption) {
            setSortingOption(""); // Toggle off if the same option is clicked
        } else {
            setSortingOption(option);
        }
    }, [sortingOption]);

    return (
        <>
            <section className="container">
                {characters.length > 0 ? (
                <>
                    <div className="heading-container">
                        <h2>Main Characters</h2>
                        {characters.length > 0 ? (
                            <ManageCatalog
                                onSortOptionChange={handleSortOptionChange}
                                sortingOption={sortingOption}
                                addNewItem={addNewItem}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                        <div className="character-grid">
                        <CatalogCards
                            items={sortedCharacters.length > 0 ? sortedCharacters : characters}
                            onClick={handleClick}
                        />
                    </div>
                </>
                ) : (
                    <div className="error-container">
                        <p className="loading">{message}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Catalog