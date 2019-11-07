
import React, { Component } from 'react';
class CustCarousel extends Component {
    state = {
        slide: 0
    }
    render() {
        if (this.props.truck.image_url.split('"').length === 7) {
            return (
                <div id="carouselImage" className="carousel slide" data-ride="carousel" style={{ "maxHeight": "500px" }}>
                    <ol className="carousel-indicators">
                        {this.state.slide === 1 ?
                            <>
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </>
                            : this.state.slide === 2 ?
                                <>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                                </>
                                :
                                <>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </>
                        }
                    </ol>
                    <div className="carousel-inner" style={{ "position": "relative", "maxHeight": "inherit", "width": "100%", "height": "100%" }}>

                        {this.state.slide === 1 ?
                            <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[3]} alt="Second slide" />
                            </div>

                            : this.state.slide == 2 ?
                                <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                    <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[5]} alt="Third slide" />
                                </div>

                                :
                                <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                    <img className="d-block w-100" style={{
                                        "maxHeight": "inherit", "width": "100%"
                                    }} src={this.props.truck.image_url.split('"')[1]} alt="First slide" />
                                </div>
                        }
                    </div>
                    <a className="carousel-control-prev" role="button" data-slide="prev" onClick={(event) => { if (this.state.slide >= 0) { this.setState({ slide: this.state.slide - 1 }) } else { this.setState({ slide: 2 }) } }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" onClick={(event) => { if (this.state.slide <= 2) { this.setState({ slide: this.state.slide + 1 }) } else { this.setState({ slide: 0 }) } }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                </div>




            );
        } else if (this.props.truck.image_url.split('"').length === 5) {
            return (
                <div id="carouselImage" className="carousel slide" data-ride="carousel" style={{ "maxHeight": "500px" }}>
                    <ol className="carousel-indicators">
                        {this.state.slide === 1 ?
                            <>
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>

                            </>
                            :
                            <>
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                            </>
                        }
                    </ol>
                    <div className="carousel-inner" style={{ "position": "relative", "maxHeight": "inherit", "width": "100%", "height": "100%" }}>

                        {this.state.slide === 1 ?
                            <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[3]} alt="Second slide" />
                            </div>
                            :
                            <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                <img className="d-block w-100" style={{
                                    "maxHeight": "inherit", "width": "100%"
                                }} src={this.props.truck.image_url.split('"')[1]} alt="First slide" />
                            </div>
                        }
                    </div>
                    <a className="carousel-control-prev" role="button" data-slide="prev" onClick={(event) => { if (this.state.slide >= 0) { this.setState({ slide: this.state.slide - 1 }) } else { this.setState({ slide: 1 }) } }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" onClick={(event) => { if (this.state.slide <= 1) { this.setState({ slide: this.state.slide + 1 }) } else { this.setState({ slide: 0 }) } }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                </div>

            )
        } else if (this.props.truck.image_url.split('"').length === 9) {
            return (
                <div id="carouselImage" className="carousel slide" data-ride="carousel" style={{ "maxHeight": "500px" }}>
                    <ol className="carousel-indicators">
                        {this.state.slide === 1 ?
                            <>
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </>
                            : this.state.slide === 2 ?
                                <>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </>
                                : this.state.slide === 3 ?
                                    <>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" className="active" data-slide-to="3"></li>
                                    </>
                                    :
                                    <>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    </>
                        }
                    </ol>
                    <div className="carousel-inner" style={{ "position": "relative", "maxHeight": "inherit", "width": "100%", "height": "100%" }}>

                        {this.state.slide === 1 ?
                            <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[3]} alt="Second slide" />
                            </div>
                            : this.state.slide === 2 ?
                                <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                    <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[5]} alt="Second slide" />
                                </div>
                                : this.state.slide === 3 ?
                                    <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                        <img className="d-block w-100" style={{ "maxHeight": "inherit", "width": "100%" }} src={this.props.truck.image_url.split('"')[7]} alt="Second slide" />
                                    </div>
                                    :
                                    <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                                        <img className="d-block w-100" style={{
                                            "maxHeight": "inherit", "width": "100%"
                                        }} src={this.props.truck.image_url.split('"')[1]} alt="First slide" />
                                    </div>
                        }
                    </div>
                    <a className="carousel-control-prev" role="button" data-slide="prev" onClick={(event) => { if (this.state.slide >= 0) { this.setState({ slide: this.state.slide - 1 }) } else { this.setState({ slide: 1 }) } }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" onClick={(event) => { if (this.state.slide <= 3) { this.setState({ slide: this.state.slide + 1 }) } else { this.setState({ slide: 0 }) } }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only" ></span>
                    </a>
                </div>

            )
        } else {
            return (
                <div id="carouselImage" className="carousel slide" data-ride="carousel" style={{ "maxHeight": "500px" }}>

                    <div className="carousel-inner" style={{ "position": "relative", "maxHeight": "inherit", "width": "100%", "height": "100%" }}>

                        <div className="carousel-item active" style={{ "position": "relative", "maxHeight": "inherit" }}>
                            <img className="d-block w-100" style={{
                                "maxHeight": "inherit", "width": "100%"
                            }} src={this.props.truck.image_url} alt="First slide" />
                        </div>

                    </div>


                </div>








            );

        }
    }
}

export default CustCarousel;