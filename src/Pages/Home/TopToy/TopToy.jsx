import teddy from "../../../assets/teddy.jpg";
import Tilt from 'react-parallax-tilt';

const TopToy = () => {
  return (
    <div className="max-w-7xl my-20 mx-auto bg-wildJoyColorTwo rounded-xl">
      <h2 className="text-center text-5xl font-display font-bold text-wildJoyColorOne pt-10 pb-16">Top Toy Of The Day</h2>
      <div className="flex justify-center pb-20">
      <Tilt
        className="tilt-img"
        tiltMaxAngleX={35}
        tiltMaxAngleY={35}
        perspective={900}
        scale={1.1}
        transitionSpeed={2000}
        gyroscope={true}
      >
        <div className="md:w-96  md:h-60 rounded-xl">
        <img src={teddy} className="image-full rounded-xl pb-20" alt="pic" />
        </div>
      </Tilt>
      </div>
    </div>
  );
};

export default TopToy;
