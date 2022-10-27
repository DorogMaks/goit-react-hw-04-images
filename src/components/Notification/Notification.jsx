import PropTypes from 'prop-types';
import React from 'react';
import { Message, Text } from './Notification.styled';

export const Notification = ({ children, message }) => {
  return (
    <Message>
      {children}
      <Text>{message}</Text>
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
