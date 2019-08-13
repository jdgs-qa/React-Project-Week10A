import React, { Component } from 'react';
import Card from './Card'
import { CardData } from './CardData';

export default class Deck extends Component {
    render() {
        return (
            <div>
                <Card cardInfo={CardData[0]} />
                <Card cardInfo={CardData[1]} />
            </div>

        )
    }
}