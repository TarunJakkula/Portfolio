import { useContext } from "react";
import { list } from "../util/staticData";
import Card from "./_technologies/Card";
import { CursorContext } from "../Layout";

export default function Technologies() {
  const { setCursorVariant } = useContext(CursorContext);
  return (
    <div
      className="flex flex-col justify-center items-center md:gap-10 gap-5 w-[80%] mt-10 rounded-3xl h-auto shadow-lg md:py-32 md:px-5 px-2 py-10 bg-white"
      onMouseEnter={() => setCursorVariant && setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant && setCursorVariant("click")}
    >
      <span className="silkscreen md:text-3xl sm:text-2xl text-xl w-full text-center text-black">
        Technologies i'm familiar with
      </span>
      <div className="w-full h-auto flex md:gap-10 sm:gap-5 gap-1 md:mt-3 mt-1 flex-wrap justify-center">
        {list.map((obj, index) => {
          return <Card key={index} title={obj.title} data={obj.data} />;
        })}
      </div>
    </div>
  );
}
