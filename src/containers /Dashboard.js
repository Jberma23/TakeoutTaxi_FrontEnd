import React, { Component } from 'react';

import CustomerContainer from "./Customers/CustomersContainer"
import OwnersContainer from "./Owners/OwnersContainer"
import cookie from 'react-cookies'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.user,
            trucks: [],
            searchTerm: "",
            favorited: [],
            favoriteTrucks: [],

        }
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    showPosition = (position) => {
        this.setState({
            currentUser: {
                ...this.state.currentUser,
                longitude: position.coords.longitude, latitude: position.coords.latitude
            }

        })
    }


    componentDidMount() {
        fetch(" https://takeouttaxi.herokuapp.com/trucks", {
            credentials: 'include',

        })
            .then(res => res.json())
            .then(data => {
                return this.setState({ trucks: data })
            })
            .catch(e => console.error(e))
    }

    handleOrder = (event, truck) => {
        console.log(truck)

    }
    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    handleFavoriteDelete = (event, truck) => {
        let t = this
        fetch(` https://takeouttaxi.herokuapp.com/favorites/${truck.favorites[0].id}`, {
            credentials: 'include',
            method: "DELETE",

        }).then(resp => resp.json())
            .then(data => {
                debugger

                this.setState({
                    currentUser: {
                        ...t.state.currentUser,

                        favorites: { ...t.state.currentUser.favorites.filter(fav => fav.id != data.id) }
                    },
                    favoriteTrucks: [...t.state.favoriteTrucks.filter(fav => fav.id != data.id)]
                })
            })
    }

    handleFavorite = (event, truck) => {
        fetch(' https://takeouttaxi.herokuapp.com/favorites', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                favoriter_id: this.state.currentUser.id,
                favorited_id: truck.id,
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    currentUser: {
                        ...this.state.currentUser,
                        favorites: { ...this.state.currentUser.favorites, res }
                    },
                    favoriteTrucks: [...this.state.favoriteTrucks, res.favorited_id]
                })
            }).then(
                fetch(` https://takeouttaxi.herokuapp.com/updates
                `, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        content: `${this.state.currentUser.firstName} ${this.state.currentUser.lastName} just favorited ${truck.name}`
                    })
                }))

    }
    handleRate = (e, { rating, maxRating }, truck) => {
        this.state.currentUser.ratings.includes(truck.id) ?
            fetch(` https://takeouttaxi.herokuapp.com/rating/${truck.rating.id}`, {
                method: "PATCH",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    rater_id: this.state.currentUser.id,
                    rated_id: truck.id,
                    score: rating
                })
            })

                .then(
                    fetch(` https://takeouttaxi.herokuapp.com/updates
                    `, {
                        credentials: 'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            content: `${this.state.currentUser.firstName} ${this.state.currentUser.lastName} just rated ${truck.name}`
                        })
                    }))

            :
            fetch(' https://takeouttaxi.herokuapp.com/ratings', {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    rater_id: this.state.currentUser.id,
                    rated_id: truck.id,
                    score: rating
                })
            })
                .then(
                    fetch(` https://takeouttaxi.herokuapp.com/updates
                    `, {
                        credentials: 'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            content: `${this.state.currentUser.firstName} ${this.state.currentUser.lastName}  just rated ${truck.name}`
                        })
                    }))
    }



    handleCommentSubmit = (event, truck, currentUser) => {


        let content = event.target.firstChild.value
        let truckId = truck.id
        return truck.reviews.map((e) => e.reviewer_id).includes(currentUser) ?
            fetch(` https://takeouttaxi.herokuapp.com/reviews/${truck.reviews[0].id}`, {
                credentials: 'include',
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    reviewer_id: currentUser.id,
                    reviewed_id: truck.id,
                    content: content,
                    username: currentUser.username
                })
            }).then(response => response.json())
                .then(response => {

                    this.setState({

                        currentUser: {
                            ...currentUser,
                            reviews: [...currentUser.reviews, response]
                        }
                    })
                }).then(
                    fetch(` https://takeouttaxi.herokuapp.com/updates
                `, {
                        credentials: 'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            content: `${currentUser.firstName} ${currentUser.lastName}  just updated its review for ${truck.name}`
                        })
                    })).then(
                        document.getElementById("commentForm").reset()
                    )
            :
            fetch(' https://takeouttaxi.herokuapp.com/reviews', {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    reviewer_id: currentUser.id,
                    reviewed_id: truck.id,
                    content: content,
                    username: currentUser.username
                })

            })
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        currentUser: {
                            ...currentUser,
                            reviews: [...currentUser.reviews, response]
                        }
                    })
                })
                .then(
                    fetch(` https://takeouttaxi.herokuapp.com/updates
                    `, {
                        credentials: 'include',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: 'application/json'
                        },
                        body: JSON.stringify({
                            content: `${currentUser.firstName} ${currentUser.lastName}  just reviewed ${truck.name}`
                        })
                    })).then(
                        document.getElementById("commentForm").reset()
                    )





    }









    render() {
        return (
            this.state.currentUser.role === "customer" ?
                <div>
                    {this.getLocation()}
                    <CustomerContainer handleSearch={this.handleSearch} currentUser={this.state.currentUser} searchTerm={this.state.searchTerm}
                        handleFavoriteDelete={this.handleFavoriteDelete}
                        handleCommentSubmit={this.handleCommentSubmit}
                        handleRate={this.handleRate}
                        apiKey={this.props.apiKey}
                        handleUserLogOut={this.props.handleUserLogOut}
                        handleFavorite={this.handleFavorite}
                        filteredTrucks={this.state.trucks.filter((truck) => truck.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()) || truck.address.toUpperCase().includes(this.state.searchTerm.toUpperCase()))} handlePinClick={this.handlePinClick} trucks={this.state.trucks} favoriteTrucks={this.props.favoriteTrucks} />
                </div>
                :
                <div>
                    {this.getLocation()}
                    <OwnersContainer state={this.state} handleSearch={this.handleSearch}
                        apiKey={this.props.apiKey} handleUserLogOut={this.props.handleUserLogOut} currentUser={this.state.currentUser} searchTerm={this.state.searchTerm}
                        trucks={this.state.trucks.filter((truck) => truck.name.includes(this.state.searchTerm))} handlePinClick={this.handlePinClick} />

                </div>

        );
    }
}

export default DashBoard;