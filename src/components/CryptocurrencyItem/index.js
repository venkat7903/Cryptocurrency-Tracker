import './index.css'

const CryptoItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item">
      <div className="logo-title-container">
        <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
        <p className="usd-euro">{currencyName}</p>
      </div>
      <div className="usd-euro-value-container">
        <p className="usd-euro-value">{usdValue}</p>
        <p className="usd-euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoItem
