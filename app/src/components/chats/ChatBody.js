import React from 'react';
import Chatroom from './chatroom/Chatroom'
import ChatSelection from './ChatSelection'

const ChatBody = ({roomChange, userId, roomId, name, searchResults, selectRoom, chat_view}) => {
  let chatroomProps = {
    roomChange, userId, roomId, name, searchResults
  }

  return (
    <div>
      YOU MADE IT!
    </div>
  );
};

export default ChatBody;


/*

{
        (chat_view) 
        ? <Chatroom {...chatroomProps} /> 
        : <ChatSelection selectRoom={selectRoom} />
}

 */