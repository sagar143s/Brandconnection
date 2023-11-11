import React from "react";

export default function ContactInfo() {
  return (
    <div className="contactinfo">
      <div className="container">
        <div className="contactinfo-container">
          <div className="location-box">
            <h3>Location</h3>
            <div>
              <p>
                Babolat Flagship store, Box Park,
                <br></br> Al Wasl road (near Mcdonalds)
              </p>
            </div>
          </div>
          <div className="contactus-box">
            <h3>Contact Support</h3>
            <div>
              <p>
                Phone:
                <a href="tel:+9715077082291">+971 507 708 2291</a>
              </p>
              <p>
                WhatsApp:
                <a href="https://wa.me/9715077082291">+971 507 708 2291</a>
              </p>
            </div>
          </div>
          <div className="workinghours-box">
            <h3>Working Hours</h3>
            <div>
              <p>
                Monday - Friday: 09:00 to 18:00 (GMT +8).
                <br></br> Closed on Saturday Sunday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
