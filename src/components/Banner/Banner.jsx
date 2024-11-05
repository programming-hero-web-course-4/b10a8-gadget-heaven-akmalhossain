import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto bg-primary text-white text-center rounded-b-2xl pt-12 pb-12 px-8 lg:pb-56">
                <h1 className="font-bold text-3xl lg:text-6xl ">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="mt-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <Link to={`/dashboard`} className="btn rounded-full text-primary text-xl  px-7 mt-12">Shop Now</Link>
            </div>
            <div className='rounded-2xl border w-fit mx-auto md:-mt-40 z-10 backdrop-blur border-white p-6 bg-white30'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;