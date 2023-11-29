import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";



const TransactionHistory = ({items}) => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.history__head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.history__body}>
        {items.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
};

export default TransactionHistory;
