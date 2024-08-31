import mail from "../assets/icons/mail.svg";
import call from "../assets/icons/call.svg";

export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full flex justify-center md:pt-16 pt-0 items-center"
    >
      <footer className="min-w-fit w-auto flex flex-wrap justify-center items-center xl:gap-10 lg:gap-7 md:gap-5 gap-3 text-base py-5 md:px-10 sm:px-7 px-5 bg-white backdrop-filter backdrop-blur-3xl bg-opacity-5 rounded-full poppins">
        <span className="text-white sm:text-sm text-xs text-center md:block hidden">
          made by <span className="text-[#eb5e28]">Tarun Jakkula</span>
        </span>
        <div className="flex justify-center items-center flex-wrap-reverse md:gap-5 gap-2">
          <div className="flex items-center gap-2">
            <img src={mail} alt="mail" />
            <span className="text-white flex sm:text-sm text-xs ">
              tarunjakkula1236@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={call} alt="call" />
            <span className="text-white sm:text-sm text-xs">7382670104</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
