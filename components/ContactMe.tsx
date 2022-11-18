import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:med.elkadiri48@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row md:text-left max-w-7xl justify-evenly px-10 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {" "}
        Contact{" "}
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Let's talk</span>
        </h4>

        <div>
          <div className="flex item-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+212 650380400</p>
          </div>
        </div>

        <div>
          <div className="flex item-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">med.elkadiri48@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="flex item-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Oujda, Oriental, Morocco</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              {...register("name")}
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              {...register("email")}
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            {...register("subject")}
          />

          <textarea
            placeholder="Message"
            className="contactInput"
            {...register("message")}
          />

          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
