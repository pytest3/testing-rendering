import { useState } from "react";

export default function ProfilePage({ userId }) {
  return (
    <>
      <Profile userId={userId}></Profile>
    </>
  );
}

function Profile({ userId }) {
  const [comment, setComment] = useState("none");
  console.log(comment);
  console.log("rendered");
  return (
    <>
      <button onClick={() => setComment("hey there")}>Click Me {userId}</button>
      {comment}
    </>
  );
}
