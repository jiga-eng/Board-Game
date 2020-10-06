import React from 'react';
import CardList from '../../Components/Card/CardList';
import {Text, View,Animated, Modal} from 'react-native';
import styles from'./styles';
import modal from 'react-native-modalbox';
import PropTypes from 'prop-types';

//class CardScreen extends React.Component {
    export default class CardsScreen extends React.Component {  
        /*static navigationOptions = {  
            title: 'Cards',  
            headerStyle: {  
                backgroundColor: '#f4511e',  
            },  
            //headerTintColor: '#0ff',  
            headerTitleStyle: {  
                fontWeight: 'bold',  
            },  
        };*/  

    constructor(props) {
        super(props);
    this.state = this.seed();
    }

    shuffle =(cards) => {
        const array = cards;
        for(let i= array.length - 1; i>0; i--) {
            const j = Math.floor(math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    seed = () => {
    const seed = Array(8).fill().map((_, index) => ({ label: index, flipped: true}));
    const cards= [...seed, ...seed]
    .map((card, index) => ({...card, index }))
    .sort(() => Math.round(Math.random()));
    const columns = Math.ceil(Math.sqrt(cards.length));
    const rows = cards.length/ columns;

    return {
        cards,
       // columns,
        rows,
        previousCard: null,
        win: false,
    };
}

show = card => ({...card, flipped:true})

hide = card => ({...card, flipped:false})

reset =() => this.setState(this.seed());

reveal = index =>
this.state.cards.map(card => (card.index === index ? this.show(card) : card))

rollback =(indexA, indexB) => {
    this.setState({
        cards: this.state.cards.map(card => {
            if(card.index ===indexA || card.index === indexB) {
                return this.hide(card);
            }
            return card;
        }), 
    });
}


flip = (index, label) => {
    let win =false;
    const previousCard =this.state.previousCard;
    if(!previousCard) {
        this.setState({cards: this.reveal(index), previousCard: { index, label } })
    } else {
        if(label !== previousCard.label) {
            setTimeout(() => this.rollback(previousCard.index, index), 1500);
        } else {
            win = this.state.cards.filter(({flipped}) => !flipped).length === 1;
        }
        this.setState({ cards: this.reveal(index), previousCard: null, win});
    }
}
render() {
    return(
        <View style={styles.container}>
            <CardList {...this.state} flip={this.flip}/>
            <Modal style={styles.modal} deviceWidth={deviceWidth} deviceHeight={deviceHeight} coverScreen isOpen={this.state.win} onClosed={this.reset} position="center">
            <Text style={styles.text}>You won! Swipe down to play again </Text>
            </Modal>
        </View>
    );
};
}




//export default CardScreen;
