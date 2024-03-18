import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  cash = amount => {
    this.setState(preValue => ({balance: preValue.balance - amount}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-con">
        <div className="card">
          <div className="name-sec">
            <h1 className="logo">GN</h1>
            <h1 className="name">G.N.Sai Ganesh</h1>
          </div>
          <div className="amt-sec">
            <h3>Your Balance</h3>
            <h2>{balance}</h2>
          </div>
          <p className="rupee">Rupees</p>
          <h1 className="with">WithDraw</h1>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(each => (
              <DenominationItem list={each} withAmount={this.cash} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
