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
    <div className="divSection">
      <h3 className="titleSection">Contact</h3>
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
            <input {...register("name")} className="contactInput" type="text" placeholder="Name" />
            <input {...register("surname")} className="contactInput" type="text" placeholder="Surname" />
          </div>
          <input {...register("email")} className="contactInput" type="email" placeholder="Email" />
          <textarea {...register("message")} className="contactInput" placeholder="Message" />
          <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
