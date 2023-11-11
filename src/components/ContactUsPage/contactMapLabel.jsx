import React from "react";
import { useForm } from "react-hook-form";

export default function ContactMapLabel() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contactmaplabel">
      <div className="container">
        <div className="contactmaplabel-container">
          <div className="contactmaplabel-left col-lg-6 col-md-6 col-sm-12">
            <iframe
              class="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28878.316805709852!2d55.30666262280828!3d25.210316972935992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67f7dbdbad43%3A0x8dcc421c7049a238!2sAl%20Jaddaf%20-%20Dubai!5e0!3m2!1sen!2sae!4v1698395029272!5m2!1sen!2sae"
              width="100%"
              height="400"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="contactmaplabel-right col-lg-6 col-md-6 col-sm-12">
            <div className="contactform">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  />
                  <error>
                    {errors.name?.type === "required" && "Name is Required"}
                  </error>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })}
                  />
                  <error>
                    {errors.email?.type === "required" && "Name is Required"}
                    {errors.email?.type === "pattern" &&
                      "Entered Email is wrong Format"}
                  </error>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                  <error>
                    {errors.phone?.type === "required" && "Number is Required"}
                  </error>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                  />
                  <error>
                    {errors.subject?.type === "required" &&
                      "Subject is Required"}
                  </error>
                </div>
                <div class="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    {...register("message", { required: true })}
                  ></textarea>
                  <error>
                    {errors.message?.type === "required" &&
                      "Fill in the message."}
                  </error>
                </div>
                <button className="sm" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
