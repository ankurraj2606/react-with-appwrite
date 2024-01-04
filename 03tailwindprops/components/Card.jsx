import React from "react";

function Card({ username = "raj", post = "Front end Engineer", myObj }) {
  console.log(username);

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <h1 className="text-2xl bg-green-400 p-3 rounded-md ">
        Vite with Tailwind
      </h1>
      <h4>{username}</h4>
      <h4>{post}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nam
        molestiae
      </p>
      <p>{myObj.address.city}</p>
    </div>
  );
}

export default Card;
