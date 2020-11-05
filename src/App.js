import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Exchangeheader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: grey;
color: #cccccc;
  `;


class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0,
        price: 15049.58
      },
      
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 2.40,
        price: 411.00
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0
      },
      {
        name: 'Chainlink',
        ticker: 'LINK',
        balance: 7.0,
        price: 10.96
      },
      {
        name: 'Polkadot',
        ticker: 'DOT',
        balance: 7.0,
        price: 4.25
      },
      {
        name: 'Uniswap',
        ticker: 'UNI',
        balance: 15.31,
        price: 2.24
        },
        {
          name: 'ANKR',
          ticker: 'ANKR',
          balance: 7.16,
          price: 0.00816
          },
          {
            name: 'Pluton',
            ticker: 'PLU',
            balance: 6.80,
            price: 7.48
            },
            {
              name: 'Crypto.com',
              ticker: 'CRO',
              balance: 1000,
              price: 0.0778
              }
    ]
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
      showBalance: !oldState.showBalance
      }
    });
  }


  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function ( values ) {
      let newValues = { ...values };
      if( valueChangeTicker === values.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;        
      newValues.price *= randomPercentage
      }
    return newValues;
  });

  this.setState({ coinData: newCoinData });
}
  render() {
    return (
      <Div className="App">
        <Exchangeheader />
        <AccountBalance 
        amount={this.state.balance}
        showBalance={this.state.showBalance}
        handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}/>
        <CoinList 
        coinData={this.state.coinData} 
        showBalance={this.state.showBalance}
        handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}
  
 

export default App;
