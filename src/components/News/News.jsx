import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSide/RightSideNav";
import Navbar from "../Navbar/Navbar";

const News = () => {

    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3 border">
                    <h2>news details</h2>
                    {id}

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;