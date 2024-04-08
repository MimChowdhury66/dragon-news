import moment from 'moment/moment';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='mt-10 mb-5 grid justify-center '>
            <img src={logo} alt="" />
            <p className='text-center mt-3'>Journalism Without Fear or Favour</p>
            <p className='text-center mt-3'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;