import { Input } from "@/components/ui/input";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10  lg:flex-row">
        <div className="lg:w-[40%] ">
          <div className="flex flex-col gap-6 rounded-xl  p-4 lg:p-6">
            <h1 className="text-5xl">Contact Us</h1>
            <div className="flex flex-col gap-[2px] p-3 text-sm ">
              <div className="flex flex-row items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"></path>
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"></path>
                </svg>
                <h1 className="text-lg font-semibold ">
                  Chat on us
                </h1>
              </div>
              <p className="font-medium">Our friendly team is here to help.</p>
              <p className="font-semibold">info@studynotion.com</p>
            </div>
            <div className="flex flex-col gap-[2px] p-3 text-sm ">
              <div className="flex flex-row items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                </svg>
                <h1 className="text-lg font-semibold ">
                  Visit us
                </h1>
              </div>
              <p className="font-medium">
                Come and say hello at our office HQ.
              </p>
              <p className="font-semibold">
                Sitamarhi Institute of Technology, Sitamarhi, Dumra , Sitamarhi, Bihar, 840454
              </p>
            </div>
            <div className="flex flex-col gap-[2px] p-3 text-sm ">
              <div className="flex flex-row items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"></path>
                </svg>
                <h1 className="text-lg font-semibold ">
                  Call us
                </h1>
              </div>
              <p className="font-medium">Mon - Fri From 8am to 5pm</p>
              <p className="font-semibold">+91 9999 888 777</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%]">
          <div className="border border-richblack-600  rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold ">
              Got a Idea? We've got the skills. Let's team up
            </h1>
            <p className="text-lg font-medium">
              Tell us more about yourself and what you're got in mind.
            </p>
            <div className="mt-7">
              {/* <ContactUsForm/> */}
              <div>
                <form
                //   onSubmit={handleSubmit(onSubmit)}
                  className={"flex flex-col gap-7"}
                >
                  <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                      <label htmlFor="firstname" className="lable-style">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter first name"
                        // {...register("firstName", { required: true })}
                        className="form-style"
                      />
                      {/* {errors.firstName && (
                        <span className=" text-yellow-25">
                          Enter Firstname *
                        </span>
                      )} */}
                    </div>

                    <div className="flex flex-col gap-2 lg:w-[48%]">
                      <label htmlFor="lastname" className="lable-style">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter last name"
                        className="form-style"
                        // {...register("lastName")}
                      />
                      {/* {errors.lastName && (
                        <span className=" text-yellow-25">Enter Lastname</span>
                      )} */}
                    </div>
                  </div>
<div className="flex flex-col gap-5 lg:flex-row">
                  <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="email" className="lable-style">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="form-style"
                    //   {...register("email", { required: true })}
                    />
                    {/* {errors.email && (
                      <span className=" text-yellow-25">Enter Email *</span>
                    )} */}
                  </div>

                  <div className="flex flex-col gap-2 lg:w-[48%]">
                    <label htmlFor="phoneNo" className="lable-style">
                      Phone Number
                    </label>
                  
                      {/* <div className="flex w-[calc(100%-90px)] flex-col gap-2"> */}
                        <Input
                          type="tel"
                          name="phoneNo"
                          id="phonenumber"
                          placeholder="12345 67890"
                          className="form-style"
                        //   {...register("phoneNo", {
                        //     required: {
                        //       value: true,
                        //       message: "Please enter phone Number *",
                        //     },
                        //     maxLength: {
                        //       value: 10,
                        //       message: "Enter a valid Phone Number *",
                        //     },
                        //     minLength: {
                        //       value: 8,
                        //       message: "Enter a valid Phone Number *",
                        //     },
                        //   })}
                        />
                        {/* {errors.phoneNo && (
                          <span className=" text-yellow-25">
                            {errors.phoneNo.message}
                          </span>
                        )} */}
                      
                    {/* </div> */}
                  </div>
</div>
                  {/* <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="lable-style">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Enter your message here"
                      className="form-style"
                    //   {...register("message", { required: true })}
                    />
                    {/* {errors.message && (
                      <span className=" text-yellow-25">
                        Enter your message *
                      </span>
                    )} */}
                  {/* </div> */} 
                

                  <button
                    type="submit"
                    className="rounded-md  px-6 py-3 text-center text-[13px] font-bold  bg-[#DFCAA7] transition-all duration-200 hover:scale-95 hover:shadow-none  disabled:bg-richblack-500 sm:text-[16px] "
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8  ">
        
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d57062.11301797361!2d84.87907432633143!3d26.63624698751008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1722435204478!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      
      <div className="mx-auto mt-[-100px]  flex w-11/12 justify-center items-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d57062.11301797361!2d84.87907432633143!3d26.63624698751008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1722435204478!5m2!1sen!2sin"
        width="100%" // Full width of the container
        height="400" // Fixed height of 400 pixels
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mb-10 "
      ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
