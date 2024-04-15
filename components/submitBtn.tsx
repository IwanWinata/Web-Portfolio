import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  // const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center px-6 py-3 font-semibold w-full sm:w-fit rounded-full bg-white
      hover:bg-[#FDEBF0] text-gray-600 border mt-3 hover:scale-110
      focus:scale-110 transition active:scale-105"
      // disabled={pending}
    >
      {/* {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )} */}

      <>
        Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
      </>
    </button>
  );
}
