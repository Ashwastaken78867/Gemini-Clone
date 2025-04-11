import InboxMsg from "../inboxMsg";
import styles from "./inboxBody.module.css";

const InboxBody = ({ msgs }) => {
    return (
        <div className={styles.inboxBody}>
            {msgs.length === 0 ? (
                <p className={styles.noMsg}>No messages yet</p>
            ) : (
                msgs.map((msg) => (
                    <InboxMsg 
                        key={msg.id} 
                        text={msg.text} 
                        userName={msg.userName} 
                        isBot={msg.isBot} 
                        time={msg.time} 
                    />
                ))
            )}
        </div>
    );
};

export default InboxBody;
