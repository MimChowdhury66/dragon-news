import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSide/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSide/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    // console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2  "><h2 className="text-4xl mb-5 text-center">Dragon News Home</h2>
                    <div className="grid justify-center gap-4">
                        {
                            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;