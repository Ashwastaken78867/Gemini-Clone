import Footer from "../../components/footer"
import Header from "../../components/header"
import Inbox from "../../components/inbox"


const Chat = ()=> {
    return (
        <div id="chat">
            <Header logo="Chat" />
                <Inbox />
                <Footer />
  
        </div>
    )
};

export default Chat;