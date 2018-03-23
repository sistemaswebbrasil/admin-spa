import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Alerts = (props) => {
  return (
    <div>
      <Message icon className={props.alert.type} >
        <Icon name={props.alert.icon} />
        <Message.Content>
          <Message.Header>{props.alert.message}</Message.Header>
        </Message.Content>
      </Message>
    </div>
  )
};

export default Alerts;


