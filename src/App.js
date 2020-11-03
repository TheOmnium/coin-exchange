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
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 13999.99
        },
        
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 399.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        },
        {
        name: 'Polkadot',
        ticker: 'DOT',
        price: 4.0
        }
      ]
    }
  }

  render() {
    return (
      <Div className="App">
        <Exchangeheader />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
  }
  

export default App;
