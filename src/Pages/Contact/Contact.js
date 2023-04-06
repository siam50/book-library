import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const email = data.email.value;
    const phone = data.phone.value;
    const message = data.message.value;
    const contactData = {
      name,
      email,
      phone,
      message,
    };
    console.log(contactData);
  };
  return (
    <div>
      <div className="max-w-screen-md w-full mx-auto bg-slate-100 p-10 md:p-24 md:py-20 my-10 md:my-20">
        <h1 className=" font-semibold text-3xl mb-10">
          Contact <span className="text-accent">Here</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is your Email?</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is your Phone?</span>
            </label>
            <input
              type="text"
              required
              name="phone"
              placeholder="+880"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is your message?</span>
            </label>
            <textarea
              className=" border-2"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-accent my-10" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
