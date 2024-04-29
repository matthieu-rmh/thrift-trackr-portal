import getConfig from "next/config";
import Image from "next/image";

export default function Home() {
  let vals = "OII";
  // console.log(getConfig());
  return (
    <>
    {vals}
      <div className="divide-y divide-yellow-500">
        <div className="w-60 h-32">DIV TO APPLY TEST WITH</div>
        <div className="w-60 h-32">DIV TO APPLY TEST WITH</div>
        <div className="w-60 h-32">DIV TO APPLY TEST WITH</div>
      </div>

      <div>
        <ul className="divide-y divide-yellow-500 ">
          <li><a href="#">OI</a></li>
          <li><a href="#">OI</a></li>
          <li><a href="#">OI</a></li>
        </ul>
      </div>
    </>
  );
}
