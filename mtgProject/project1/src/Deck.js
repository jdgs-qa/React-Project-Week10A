import React, { Component } from 'react';
import Card from './Card';
import Axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';

export default class Deck extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            axiosHeaders: {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/get/all', "", this.state.axiosHeaders)

            .then(res => {
                const CardData = res.data;
                console.log(CardData);
                this.setState({ cards: CardData });
                console.log(this.state);
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        if (this.state.cards[0]) {
            return (
                <div className="container mx-auto">
                    {this.state.cards.map((card) =>
                        <Card cardInfo={card} key={card.cardId} />
                    )}
                    <ReactAudioPlayer
                        src="./stdis.mp3"
                        autoPlay
                        loop
                    />
                </div>
            )
        } else {
            return false;
        }
    }
}