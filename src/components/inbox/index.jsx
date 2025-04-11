import { useState } from "react";
import InboxBody from "../inboxBody";
import InboxFooter from "../inboxFooter";
import InboxHeader from "../inboxHeader";
import "./inbox.css";

const Inbox = () => {
    const currentuser  ={
        userName:"Bot",
        id:12,
    };


    const [msgs, setMsgs] = useState([]); 
    console.log("Messages Array:", msgs);

    return (
        <div className="inbox">
            <InboxHeader user={currentuser} />
            <InboxBody msgs={msgs} /> 
            <InboxFooter setMsgs={setMsgs} />
        </div>
    );
};

export default Inbox;
