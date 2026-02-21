import { useEffect } from "react";
import { MobyDick } from "../../data";

export default function Support() {
  useEffect(() => {
    document.title = "Support - Marker";
  }, []);
  return (
    <>
      <section className="">
        <h1 className="">Welcome To The Support Page.</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-12">
          {MobyDick.map((chapter: string, index: number) => {
            return (
              <li
                key={index}
                className="relative rounded-md   overflow-hidden isolate"
              >
                <img src="/image-placeholder.webp" alt="" className="" />
                <span className="inline-block w-full  bg-gray-900 text-white  p-2 text-sm font-medium">
                  Chapter {index + 1}: {chapter}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
