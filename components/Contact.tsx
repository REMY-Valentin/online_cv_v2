import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

type Props = {};

type Inputs = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
  return (
    <div className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          If you need to contact me .<span>Lets talk !</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <BsFillTelephoneFill color="#f7ab0a" size={20} />
          <p className="text-2xl">+33786273538</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <HiOutlineMail color="#f7ab0a" size={20} />
          <p className="text-2xl">valentin.remy88@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a];"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("surname")}
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a];"
              type="text"
              placeholder="Surname"
            />
          </div>
          <input
            {...register("email")}
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a];"
            type="email"
            placeholder="Email"
          />
          <textarea
            {...register("message")}
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a];"
            placeholder="Message"
          />
          <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
