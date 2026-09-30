"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  return (
    <section className="relative top-[73px] bg-[#fdfefe] py-7 text-center">
      <span className="mb-3 inline-block rounded-3xl bg-[#d9d2fd] px-3.5 py-1.5 text-[16px] font-semibold uppercase leading-none text-[#7049fb]">
        FAQ
      </span>

      <h2 className="mb-3 text-[25px] font-extrabold leading-none text-[#30325b]">
        Frequently Asked Questions
      </h2>

      <p className="mb-5 text-[18px] font-medium text-[#6c7096]">
        Find Quick Answers To Common Questions About EchoGPT
      </p>

      <div className="mx-auto w-[90%] max-w-4xl">
        <Accordion.Root type="single" collapsible>
          
          <Accordion.Item value="item-1" className="mb-3 overflow-hidden rounded-xl border-2 border-gray-200">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between bg-white px-5 py-4 text-left font-semibold text-[#30325b]">
                <span>Accordion Item #1</span>

                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="bg-white px-5 pb-5 text-left text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className="mb-3 overflow-hidden rounded-xl border-2 border-gray-200">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between bg-white px-5 py-4 text-left font-semibold text-[#30325b]">
                <span>Accordion Item #2</span>

                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="bg-white px-5 pb-5 text-left text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Content>
          </Accordion.Item>

        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
