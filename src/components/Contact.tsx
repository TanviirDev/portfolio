import React from "react";
import Title from "./UI/Title";
import ContactForm from "./UI/ContactForm";
import Chat from "./Chat";

function Contact() {
  return (
    <section className="w-full mb-10">
      <Title title="Get in Touch" />
      <div className="grid grid-cols-1 p-5 lg:grid-cols-2  gap-6 xl:gap-10 xl:p-0 ">
        <ContactForm className="" />
        <Chat />
      </div>
    </section>
  );
}

export default Contact;
