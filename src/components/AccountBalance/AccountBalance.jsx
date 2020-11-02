import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
border: 10px solid black;
border-color: black;
border-style: groove;
width: 15rem;
margin: 10px auto;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>  
                Value: $ {this.props.amount} 
            </Section>        );
    }
}



AccountBalance.propTypes = {
    name: PropTypes.number.isRequired,
}