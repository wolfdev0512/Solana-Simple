import dynamic from "next/dynamic";
//export

export const SendToken = dynamic(() => import("./SendToken/SendToken"));
