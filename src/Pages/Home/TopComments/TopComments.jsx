import Tilt from "react-parallax-tilt";

const TopComments = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-wildJoyColorTwo text-5xl font-bold my-16 font-display ">
        Our Top Comments Of The Day
      </h2>
      <Tilt  perspective={3000}>
        <div >
        <div className="flex justify-center">
        <div className="bg-wildJoyColorTwo md:w-2/4 rounded-xl p-16">
          <div className="chat chat-start mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/51.jpg" />
              </div>
            </div>
            <div className="chat-bubble bg-wildJoyColorOne p-5 text-wildJoyColorTwo">
              This is the best Toy Website Ever I Love it Man
            </div>
          </div>
          <div className="chat chat-start mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/9.jpg" />
              </div>
            </div>
            <div className="chat-bubble bg-wildJoyColorOne  p-5 text-wildJoyColorTwo">
              I Also find this site Awesome!
            </div>
          </div>
          <div className="chat chat-start mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/51.jpg" />
              </div>
            </div>
            <div className="chat-bubble bg-wildJoyColorOne  p-5 text-wildJoyColorTwo">
              I can tell You have a great taste man :)
            </div>
          </div>
        </div>
      </div>
        </div>
      </Tilt>
      
    </div>
  );
};

export default TopComments;
