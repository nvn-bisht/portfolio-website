"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          imnaveenbisht@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col  dark:text-black  "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <div className="flex md:flex-row items-start justify-between gap-3  py-4">
          <input
            className="h-14 rounded-lg  dark:bg-slate-700/50 dark:bg-opacity-80 dark:text-gray-100 dark:focus:bg-opacity-100 transition-all dark:outline-none p-5 glow-border focus:border-2 focus:border-purple-600 w-full"
            name="senderFirstName"
            type="text"
            required
            placeholder="First Name"
          />

          <input
            className="h-14 w-full self-end rounded-lg borderBlack dark:bg-slate-700/50 dark:bg-opacity-80 dark:text-gray-100 dark:focus:bg-opacity-100 transition-all dark:outline-none p-5 glow-border focus:border-2 focus:border-purple-600 "
            name="senderLastName"
            type="text"
            required
            placeholder="Last Name"
          />
        </div>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-slate-700/50 dark:bg-opacity-80 dark:text-gray-100 dark:focus:bg-opacity-100 transition-all dark:outline-none glow-border focus:border-2 focus:border-purple-600 "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg dark:text-gray-100 borderBlack p-4 dark:bg-slate-700/50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none glow-border focus:border-2 focus:border-purple-600 "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn className="self-center" />
      </form>
    </motion.section>
  );
}
