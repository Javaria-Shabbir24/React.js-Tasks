//question NO# 1
import React from 'react';

class Mailbox extends React.Component {
  render() { //takes in js and html code 
    const { unreadMessages } = this.props;
    const unreadMessageCount = unreadMessages.length;

    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessageCount > 0 &&
          <p>You have {unreadMessageCount} unread messages.</p>
        }
      </div>
    );
  }
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

function App() {
  return (
    <div>
      <Mailbox unreadMessages={messages} />
    </div>
  );
}

export default App;
