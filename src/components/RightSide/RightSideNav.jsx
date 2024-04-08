import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Zone1 from '../../assets/qZone1.png';
import Zone2 from '../../assets/qZone2.png';
import Zone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="">
                <h2 className="text-3xl">LogIn with </h2>
                <button className="btn ml-5 mt-5 mb-5 btn-outline">
                    <FaGoogle />

                    LogIn with Google                </button>
                <button className="btn ml-5 btn-outline"><FaGithub />
                    LogIn with Github</button>
            </div>
            <div>
                <h2 className="text-3xl mt-4 mb-4">Find us on </h2>
                <a className="flex gap-3" href=""><FaFacebook />
                    FaceBook</a>

            </div>
            <div className="mt-5 bg-slate-300">
                <h2 className="text-3xl">Q Zone </h2>
                <img className="m-5" src={Zone1} alt="" />
                <img className="m-5" src={Zone2} alt="" />
                <img className="m-5" src={Zone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;