import { useState , useEffect } from "react";

const User = ({name}) => {
   const [count] = useState(0);
   const [count2] = useState(2);
   useEffect(()=>{
      getUserInfo();
   },[])

   async function getUserInfo  ()  {
      // const data = await fetch("")
   }


   return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
         <h1>Count = {count}</h1>
         <h1>Count2 = {count2}</h1>
         <h2>Name: {name}</h2>
         <h3>Location: Delhi</h3>
         <h4>Contact: reetikadahiya444@gmail.com</h4>
    </div>
   );
};

export default User;