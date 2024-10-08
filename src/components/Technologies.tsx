import { list } from "../util/staticData";
import Card from "./_technologies/Card";

export default function Technologies() {
  return (
    <div className="flex flex-col justify-center items-center md:gap-10 gap-5 w-full h-auto py-10 md:pt-32 pt-20">
      <span className="poppins md:text-3xl sm:text-2xl text-xl w-full text-center text-white">
        Technologies i'm familiar with
      </span>
      <div className="w-full h-auto flex md:gap-10 gap-5 md:mt-3 mt-1 flex-wrap justify-center">
        {list.map((obj, index) => {
          return <Card key={index} title={obj.title} data={obj.data} />;
        })}
      </div>
    </div>
  );
}
