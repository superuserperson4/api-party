import React, { Component } from 'react'

class GithubUser extends Component {
    constructor(props) {
        super(props)
        this.fetchUserData()
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => console.log(user))
    }

    render() {
        return <h1>USER: {this.props.match.params.username}</h1>
    }
}

export default GithubUser