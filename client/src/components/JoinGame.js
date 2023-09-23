import React from "react";
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

function JoinGame() {
  
    const sendMessage = () =>{
      socket.emit("send_message",{message:"Hello"});

    };
   return ( 
    <div className="App">
      <h1>Hi!!!</h1>
      <input placeholder="Message..." />
      <button onClick={sendMessage}> Send Message</button>
    </div>
  );
}

export default JoinGame;
