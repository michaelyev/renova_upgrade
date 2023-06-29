"use client";
import Image from "next/image";
import { useState } from "react";

const faq = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Qu",
  },
  {
    question: "22Lorem ipsum dollor sit amet consectetur adipisicing elior sit amet consectetur adipisicing elit",
    answer: "wefrewf4weav ",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Qu",
  }
];

export default function SelectionFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-[415px] border-additional1 border-solid border-2 text-left px-[32px] mt-[24px] py-[40px] py-[40px">
      <div className="container">
        <h3 className="">
          FAQ
        </h3>

        <div>
          {faq.map((ele, i) => {
            return (
              <div key={i} className="max-w-[415px] my-[29px]  ">
                <button
                  className="text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {ele.question}{" "}

                  
                </button>
                {openIndex === i && (
                  <div className="py-[24px] text-left">{ele.answer}</div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
