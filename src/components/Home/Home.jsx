import Header from "../Header/Header";
import LeftSideNav from "../LeftSide/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSide/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border"><h2 className="text-4xl">News coming soon</h2></div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;