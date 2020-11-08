import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
border: 2.5px ;
border-color: black;
border-style: groove;

width: 22.5rem;
margin:  ;
padding: 10px;

`;
const Button = styled.button`
border: 2px solid black;
color: blackls -;
text-align: left;
font-size: 0.7rem;
margin: 10px ;



`;

export default function AccountBalance(props) {
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show balance';
        let content = null;
        if ( props.showBalance ) {
            content = <>Balance: ${props.amount}</>;
        }
        return (
            <Section>  
                {content}
                <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>
            </Section>        );
    
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}