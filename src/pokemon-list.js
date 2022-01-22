import React, { useState, useEffect } from "react";
import "./App.css"; // importing css file 

/** Pokemon component is created to render the pokemon data */
export const Pokemons = () => {

    //state variable for pokemon data 
    const [pokemonData, setPokemonData] = useState([]);

    //url to load the json data.
    const jsonDataUrl = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    //Method to fetch the data from URL.
    const getPokemonDataFromApiAsync = async () => {
        return await fetch(jsonDataUrl)
            .then((response) => response.json())
            .then((responseJSON) => {
                return responseJSON.pokemon;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        //using hooks to load the json data from given URL and set is in the state.
        getPokemonDataFromApiAsync().then(
            data => {
                if (data != null && data.length > 0) {
                    // sorting the data in alphabetical order by Name
                    data.sort((a, b) => (a.name > b.name) ? 1 : -1)
                    setPokemonData(data)
                }

            }
        );
    }, []);


    return (
        <div className="pokemons">
            {
                pokemonData &&
                pokemonData.map((data, key) => {
                    return (
                        <div className="pokemon" key={key}>
                            <h3> Pokemon Number -<b>{data.num}</b></h3>
                            <h3>Pokemon Name - <b>{data.name}</b></h3>
                            <div className="details">
                                <p> Type : {data.type && data.type.map((el, index) => { return <span key={index}>{index != 0 && <span>, </span>}{el}</span> })}</p>
                                <p> Height: <b>{data.height}</b></p>
                                <p> Weight: <b>{data.weight}</b></p>
                                <p> Weaknesses: {data.weaknesses && data.weaknesses.map((el, index) => { return <span key={index}>{index != 0 && <span>, </span>}{el}</span> })}</p>
                                <p> Next Evolution: {data.next_evolution && data.next_evolution.map((el, index) => { return <span key={index}>{index != 0 && <span>, </span>}{el.num}- {el.name}</span> })}</p>
                            </div>
                        </div>
                    );
                })}

        </div >

    );
};