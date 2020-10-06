import React from 'react';
import PropTypes from 'prop-types';

import Card from 'C:/Users/jitendra reddy/BoardGame/src/Components/Card';
import { Col, Row, Grid,Animated, Text} from 'react-native-easy-grid';

const CardList = ({cards, rows, columns}) => {
    const rowsToRender= Array(rows).fill().map((_, rIndex) =>
(
    <Row key={rIndex}>
        {
            cards
            .filter(({ index }) => index % rows === rIndex)
            .map(card => (<Col key={card.index}><Card {...card}/></Col>))
        }
    </Row>
)
    );
return(
    <Grid>{rowsToRender}</Grid>
);
};
CardList.PropTypes ={
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            label: PropTypes.number,
        }),
    ).isRequired,
    rows: PropTypes.number.isRequired,
    columuns: PropTypes.number.isRequired,
};
export default CardList;
