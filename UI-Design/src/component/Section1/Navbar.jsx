import React from "react";
import { CornerDownRight } from "lucide-react";

const Navbar = () => {
 return (
   <div className="flex justify-between items-center px-16 py-6">
     <h4 className="bg-black text-white rounded-4xl p-2">TARGET AUDIENCE</h4>

     <button className="bg-gray-200 px-4 py-2 rounded-3xl flex items-center gap-2">
       <CornerDownRight />
       <span>DIGITAL BANKING PLATFORM</span>
     </button>
   </div>
 );

};

export default Navbar;
