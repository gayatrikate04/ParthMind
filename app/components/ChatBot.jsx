import { FaRegSmile, FaPaperPlane } from "react-icons/fa";

const ChatBox = () => {


  return (
    <div className="h-screen flex flex-col justify-between bg-[#F3F4F6]">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#A5D6A7] p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <img src="profilephoto.png" alt="profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold text-[#374151]">Keshav</h1>
        </div>
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 ">
        <div className="flex items-start gap-2.5 ">
          <img className="w-8 h-8 rounded-full" src="profilephoto.png" alt="Profile" />
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl bg-gradient-to-r from-teal-200 to-lime-200">
            <div className="flex items-center space-x-2 ">
              <span className="text-sm font-semibold text-gray-900">Keshav</span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 ">
            Hey there! I'm Keshav. I'm here to listen and help. How are you feeling today?
            </p>
          </div>
        </div>
      </div>

      {/* Chat Input at Bottom */}
      <div className="sticky bottom-0 flex items-center p-3 border-t border-gray-300 bg-white">
      <button className="p-2 text-[#374151]">
          <FaRegSmile size={24} />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-4 py-2 border rounded-full text-[#374151] outline-none"
        />
        <button  className="ml-2 p-2 bg-[#90f3cb] rounded-full text-white">
          <FaPaperPlane size={20} />
        </button>
       
      </div>
    </div>
  );
};

export default ChatBox;


