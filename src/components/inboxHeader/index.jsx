import { useEffect } from "react";
import "./inboxHeader.css";

const InboxHeader = (props) => {
    const { user } = props;
    const { userName } = user;

    useEffect(() => {
        console.log("user Changed"); // ✅ Correct function inside useEffect
    }, [user]);

    return (
     
        <div className="inboxHeader">
            <h2 className="inboxHeaderName">{userName}</h2> {/* ✅ Use userName instead of name */}
        </div>
    );
};

export default InboxHeader;
