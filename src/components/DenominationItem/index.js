import './index.css'

const DenominationItem = prop => {
  const {list, withAmount} = prop
  const {value} = list
  const click = () => {
    withAmount(value)
  }

  return (
    <div>
      <li className="li-item" onClick={click}>
        {value}
      </li>
    </div>
  )
}

export default DenominationItem
