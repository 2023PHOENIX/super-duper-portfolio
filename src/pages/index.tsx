import Head from "next/head";

import ServiceCard from "@/components/ServiceCard";
import { services } from "data";

export default function index() {
  console.log(services);

  return (
    <div className="flex flex-col  pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        I am B.Tech Computer Science final year student from UPES dehradun.
      </h5>
      <div className=" bg-slate-600 p-5">
        <h6 className="m-2 center"> MY SKILLS</h6>
        <div className="grid gap-5 lg:grid-cols-2 ">
          {services.map((service) => (
            // eslint-disable-next-line react/jsx-key
            <div className="bg-gray-300 rounded-lg lg:col-span-1 p-2 m-2">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
