import Footer from "../../components/footer";
import Header from "../../components/header";
import UserList from "../../components/userList";


const Home = () => {
    return (
        <div id="home">
            <Header logo={"Home"}/>
            <UserList />
            <Footer/>


        </div>
    )
}

export default Home;