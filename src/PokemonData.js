import React, { Component } from 'react'
import './PokemonData.css'

class PokemonData extends Component {
    state = {
        pokemon: {
            sprites: { front_default: ''},
            id: '',
            types: {},
            name: '',
            height: '',
            weight: '',
            base_experience: ''
        }
    }

    constructor(props) {
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData = (props) => {
        fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.number}`)
            .then(response => response.json())
            .then(pokemon => this.setState({ pokemon }))
            .catch(error => console.warn(error))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = (nextProps.location !== this.props.location)
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
    }

    pokemonTypes() {
        let types = []
        const { pokemon } = this.state

        for (let i = 0; i < pokemon.types.length; i++){
            types.push(pokemon.types[i].type.name)
        }

        if (types.length === 1) {
            return <h3>Type: {types[0]}</h3>
        } else {
            return <h3>Types: {types[1]} & {types[0]}</h3>
        }
    }

    render() {
        const { pokemon } = this.state
        return(
            <div className='pokemon-data'>
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
                <h2>Pokemon #{pokemon.id}: </h2>
                <h1>{pokemon.name}</h1>
                <h3>{this.pokemonTypes()}</h3>
                <h3>Height: {pokemon.height}</h3>
                <h3>Weight: {pokemon.weight}</h3>
                <h3>Base Experience: {pokemon.base_experience}</h3>
            </div>
        )
    }
}

export default PokemonData