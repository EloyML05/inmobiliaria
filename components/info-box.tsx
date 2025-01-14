import Link from "next/link";
import React from "react";

export default function InfoBox({
  heading,
  children,
  buttonInfo,
  textcolor = "text-gery-800",
  backgroundcolor,
}: {
  heading: string;
  children: React.ReactNode;
  buttonInfo: {
    text: string;
    link: string;
    background: string;
  };
  textcolor?: string;
  backgroundcolor: string;
}) {
  return (
    <div className={`${backgroundcolor}  p-6 rounded-lg shadow-md `}>
      <h2 className={`text-2xl font-bold + ${textcolor}`}> {heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 + ${buttonInfo.background}`}>
        {buttonInfo.text}
      </Link>
    </div>
  );
}
