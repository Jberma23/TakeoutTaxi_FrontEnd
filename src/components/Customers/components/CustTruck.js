import React, { Component } from 'react';
import { Form, TextArea, Rating, Button, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import CustCarousel from "./CustCarousel"
class CustTruck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            commentClicked: false,
            favoriteClicked: false,
            selectedTruck: props.selectedTruck,
            comments: this.props.currentUser.reviews,
            favoriteTruck: props.favoriteTrucks

        }

    }
    componentDidUpdate(props) {

        if (props.selectedTruck) {
            let num = props.selectedTruck.split(" ")[0]
            let id = `truck-${num}`
            let element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            return null
        }

    }
    handleComment = (event, truck, currentUser) => {
        this.props.handleCommentSubmit(event, truck, currentUser)
    }

    handleFavoriteClick = (event, truck) => {
        this.props.handleFavorite(event, this.props.truck);
        this.setState({ favoriteClicked: !this.state.favoriteClicked })
    }

    render() {

        return (
            <>
                <div className="ui card" style={{ width: "100%" }} id={`truck-${this.props.truck.id}`} >
                    <div className="scrolling content">
                        <div className="left floated meta" id="price">{this.props.truck.price}</div>

                        {
                            this.state.favoriteClicked ?

                                <>
                                    <div className="right floated meta">Favorite  <i id="fullheart" className="heart icon" onClick={(event) => this.handleFavoriteClick(event, this.props.truck)}></i></div>
                                </>
                                :
                                <>
                                    <div className="right floated meta">Favorite  <i id="heart" className="heart outline icon" onClick={(event) => this.handleFavoriteClick(event, this.props.truck)}></i></div>
                                </>

                        }

                        <>
                            {this.props.truck.name}
                        </>
                    </div>
                    <>
                        <CustCarousel truck={this.props.truck} />
                    </>

                    <div className="content">
                        {/* <i id="star" className="star icon"></i> */}
                        {this.props.truck.ratings.length >= 1 ?
                            <span className="right floated">
                                Average Rating: <br />

                                <Rating maxRating={5} defaultRating={this.props.truck.rating} icon='star' disabled />
                                <br />
                                Rate:   <br />
                                <Rating maxRating={5} icon='star' defaultRating={this.props.truck.ratings[0].score} clearable onRate={(e, { rating, maxRating }) => this.props.handleRate(e, { rating, maxRating }, this.props.truck)} />
                            </span>
                            :
                            <span className="right floated">
                                Average Rating: <br />
                                <Rating maxRating={5} defaultRating={this.props.truck.rating} icon='star' disabled />
                                <br />
                                Rate:   <br />
                                <Rating maxRating={5} icon='star' clearable onRate={(e, { rating, maxRating }) => this.props.handleRate(e, { rating, maxRating }, this.props.truck)} />
                            </span>
                        }
                        {/* // <span className="right floated">

                        // </span> */}

                        {this.state.commentClicked ?
                            <>
                                <span className="left floated"> <i id="review" className="comment icon" onClick={(event) => this.setState({ commentClicked: !this.state.commentClicked })} ></i>
                                    Reviews: {this.props.truck.reviews.length + this.props.truck.review_count}</span>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="center">
                                    <Form id="commentForm" onSubmit={(event) => this.handleComment(event, this.props.truck, this.props.currentUser)}>
                                        <TextArea placeholder='Leave a Comment Here' style={{ width: "100%" }} />
                                        <Button type='submit' >Submit</Button>
                                    </Form>
                                </span>
                                <br></br>
                                <span>
                                    <ul>
                                        {this.props.truck.reviews.map((r) =>
                                            <List key={r.id}>
                                                <List.Item>
                                                    <List.Icon name='comment' />
                                                    <List.Content>
                                                        <List.Header as='a'>
                                                            <i className="user outline icon"></i>
                                                            {r.username}</List.Header>
                                                        <List.Description>{r.content}
                                                        </List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </List>
                                        )}

                                    </ul>
                                </span>
                            </>

                            :
                            <span className="left floated"> <i id="review" className="comment icon" onClick={(event) =>
                                this.setState({ commentClicked: !this.state.commentClicked })}
                            ></i>
                                Reviews: {this.props.truck.reviews.length + this.props.truck.review_count}</span>

                        }


                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            {/* <i className="heart outline icon"></i> */}
                            <Link to={'/orders'} ><button type="">Order</button></Link>
                        </div>


                    </div>
                </div>
            </>

        )
    }
}

export default CustTruck;