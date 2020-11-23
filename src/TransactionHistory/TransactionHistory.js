import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css"


function TransactionHistory ({items}) {
    const limitItem = 6;
    return(
        <table>
            <thead>
                <tr>
                    <th className={styles.name}>Type</th>
                    <th className={styles.name}>Amount</th>
                    <th className={styles.name}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((transactions, index) => index < limitItem && (
                    <tr key ={transactions.id}>
                        <td>{transactions.type}</td>
                        <td>{transactions.amount}</td>
                        <td>{transactions.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}
TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
  };

export default TransactionHistory;