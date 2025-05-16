import { list } from "../util/staticData";
import Card from "./_technologies/Card";

export default function Technologies() {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center md:gap-10 gap-5 w-[80%] mt-10 rounded-3xl h-auto md:py-32 md:px-5 px-2 py-10 "
    >
      <span className="silkscreen md:text-5xl sm:text-3xl text-xl w-full text-center text-white ">
        Technologies i'm familiar with
      </span>
      <div className="w-full h-auto grid lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(235px,1fr))] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-10 gap-5 md:mt-5 mt-3">
        {list.map((obj, index) => {
          return <Card key={index} title={obj.title} data={obj.data} />;
        })}
      </div>
    </div>
  );
}
