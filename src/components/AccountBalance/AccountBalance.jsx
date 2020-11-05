import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
border: 6px black;
border-color: black;
border-style: groove;
width: 8rem;
margin: 10px ;

`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show balance';
        let content = null;
        if ( this.props.showBalance ) {
            content = <>Balance: ${this.props.amount}</>;
        }
        
        return (
            <Section>  
                {content}
                <button onClick={this.props.handleBalanceVisibilityChange}>{buttonText}</button>
            </Section>        );
    }
}



AccountBalance.propTypes = {
    name: PropTypes.number.isRequired,
}