import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/ankurraj2606")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between items-center w-2/3 h-2/3 shadow-md shadow-slate-500 opacity-85 p-8 rounded-xl">
        <img
          src={data.avatar_url}
          alt=""
          width="300"
          height="300"
          className="rounded-full"
        />
        <div className="pl-4 flex flex-col font-mono ">
          <h2 className="text-3xl font-sans pt-2 text-black">{data.name}</h2>
          <p className="font-sans pt-2 text-lg text-gray-400">{data.email}</p>
          <p className="font-sans pt-2 text-lg text-gray-400">{data.login}</p>
          <p className="font-sans pt-2 text-lg text-gray-400">{data.company}</p>
          <p className="font-sans pt-2 text-lg text-gray-400">
            {data.location}
          </p>
          <p className="font-sans pt-2 text-lg text-gray-400">{data.bio}</p>
          <p className="font-sans pt-2 text-lg text-gray-400">
            <a
              className="text-blue-500 underline "
              href={data.html_url}
              target="_blank"
            >
              {data.html_url}
            </a>
          </p>
          <p className="font-sans pt-2 text-lg text-gray-400">
            Github Followers : {data.followers}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/ankurraj2606");
  return res.json();
};
