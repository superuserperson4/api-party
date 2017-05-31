import React, { Component } from 'react'
import './Pokemon.css'
import { Route } from 'react-router-dom'
import PokemonData from './PokemonData.js'

class Pokemon extends Component {
    state = {
        number: 1
    }

    handleChange = (ev) => {
        const number = ev.currentTarget.value
        this.setState({ number })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        if (this.state.number > 0 && this.state.number <= 721) {
            this.props.history.push(`/pokemon/${this.state.number}`)
        } else {
            window.alert("Please enter a valid pokemon number")
        }
    }

    render() {
        return (
            <div className='pokemon'>
                <img 
                    className='pokemon-logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png' 
                    alt='pokemon'
                 />
                 <form onSubmit={this.handleSubmit}>
                     <div>
                         <input 
                            type='number' 
                            value={this.state.number}
                            onChange={this.handleChange}
                         />
                    </div>
                    <div>
                        <button type='submit'>Search Pokemon</button>
                    </div>
                </form>

                <Route path='/pokemon/:number' component={PokemonData} />
                <Route exact path='/pokemon' render={() => (
                    <h3>Please enter your desired Pokemon's number</h3>
                )} />
            </div>
        )
    }
}

export default Pokemon