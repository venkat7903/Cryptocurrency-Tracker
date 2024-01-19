// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyList extends Component {
  state = {cryptoDataList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedDataList = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({cryptoDataList: updatedDataList, isLoading: false})
  }

  renderCryptoList = () => {
    const {cryptoDataList} = this.state
    return (
      <div className="sub-crypto-app-container">
        <h1 className="crypto-title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency-img"
        />
        <ul className="crypto-list">
          <li className="crypto-currency-heading">
            <p className="title">Coin Type</p>
            <div className="usd-euro-container">
              <p className="currency-type">USD</p>
              <p className="currency-type">EURO</p>
            </div>
          </li>
          {cryptoDataList.map(each => (
            <CryptoItem key={each.id} cryptoDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#fff" width={80} height={80} />
          </div>
        ) : (
          this.renderCryptoList()
        )}
      </>
    )
  }
}

export default CryptocurrencyList
