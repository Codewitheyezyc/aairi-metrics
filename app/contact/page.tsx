"use client";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { contact } from "@/constants";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";

type FormProps = {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    } as FormProps,
    onSubmit: ({ value }) => {
      console.log(value);
      // alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <>
      <Banner>
        <div className="grid md:grid-cols-2 items-center gap-20 text-center ">
          <div className="hidden md:block">
            <Image
              src="/hero-image-2.png"
              width={2000}
              height={2000}
              alt="About Image"
              className="rounded-2xl  "
            />
          </div>
          <div className="">
            <h1 className="text-4xl md:text-6xl  font-medium mb-4">
              Contact Us
            </h1>
          </div>
        </div>
      </Banner>
      <SectionContainer className="bg-[#d1e0ee]">
        <div className="w-full flex flex-col justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className=" flex flex-col gap-4 w-full lg:w-[80%]"
            action=""
          >
            <Reveal direction="up" delay={150}>
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    return value.trim() === "" ? "Name is required" : undefined;
                  },
                }}
              >
                {(field) => (
                  <div className="">
                    <input
                      className="w-full rounded-md p-4 bg-slate-100"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Your Name"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <em>{field.state.meta.errors.join(", ")}</em>
                    )}
                  </div>
                )}
              </form.Field>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return !emailRegex.test(value)
                      ? "Please enter a valid email"
                      : undefined;
                  },
                }}
              >
                {(field) => (
                  <div className="">
                    <input
                      className="w-full rounded-md p-4 bg-slate-100"
                      type="email"
                      placeholder="Email Address"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <em>{field.state.meta.errors.join(", ")}</em>
                    )}
                  </div>
                )}
              </form.Field>
            </Reveal>
            <Reveal direction="up" delay={250}>
              <form.Field
                name="number"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return "Phone number is required";
                    const phoneRegex = /^[0-9]{10,15}$/;
                    if (!phoneRegex.test(value)) {
                      return "Enter a valid number";
                    }
                  },
                }}
              >
                {(field) => (
                  <div className="">
                    <input
                      className="w-full rounded-md p-4 bg-slate-100"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Phone Number"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <em>{field.state.meta.errors.join(", ")}</em>
                    )}
                  </div>
                )}
              </form.Field>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <form.Field
                name="subject"
                validators={{
                  onChange: ({ value }) => {
                    return value.trim() === "" ? "Add Subject" : undefined;
                  },
                }}
              >
                {(field) => (
                  <div className="">
                    <input
                      className="w-full rounded-md p-4 bg-slate-100"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Subject"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <em>{field.state.meta.errors.join(", ")}</em>
                    )}
                  </div>
                )}
              </form.Field>
            </Reveal>
            <Reveal direction="up" delay={350}>
              <form.Field
                name="message"
                validators={{
                  onChange: ({ value }) => {
                    return value.trim() === ""
                      ? "Message is required"
                      : undefined;
                  },
                }}
              >
                {(field) => (
                  <div className="">
                    <textarea
                      className="w-full h-50 p-4  rounded-md 
          bg-slate-100"
                      placeholder="Write a Message"
                      name="message"
                      id=""
                      onChange={(e) => field.handleChange(e.target.value)}
                    ></textarea>
                    {field.state.meta.errors.length > 0 && (
                      <em>{field.state.meta.errors.join(", ")}</em>
                    )}
                  </div>
                )}
              </form.Field>
            </Reveal>
            <Reveal direction="up" delay={400}>
              <div className="flex items-center justify-center mt-10">
                <Button
                  title="Send a Message"
                  variant="btn_dark_blue"
                  type="submit"
                />
              </div>
            </Reveal>
          </form>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 items-center">
            {contact.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal direction="up" key={index} delay={index * 150}>
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg flex items-center justify-between gap-12"
                  >
                    <div className="w-[50%]">
                      <p className="font-medium mb-2">{item.name}</p>
                      {item.content.map((content, index) => (
                        <p key={index} className="text-slate-900/40">
                          {content.value}
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <Icon className="text-[#38bdf8]" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default ContactPage;
