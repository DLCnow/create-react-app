import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

import styles from './Count.css';

export const Count = props => (
  <div className={styles._}>
    <p className="my-4">The count is {props.count}</p>
    <Button onClick={props.increment}>increment</Button>
    <Button onClick={props.incrementAsync}>incrementAsync</Button>
  </div>
);

const mapState = state => ({
  count: state.count,
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
});

export default connect(mapState, mapDispatch)(Count);
