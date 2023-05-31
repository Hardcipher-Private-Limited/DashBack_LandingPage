import React, { useEffect, useState } from "react";
import "../../assets/css/ContectUS.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";

const ContectUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormErrors({ ...formErrors, [name]: "" });
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://backend.hardcipher.in/api/add_contact_us/:HCWEB77459",
          formData
        );

        if (response.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Success",
            text: "Contact form submitted successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
          setFormErrors({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
        } else {
          console.error("Failed to submit contact form");
        }
      } catch (error) {
        console.error(
          "An error occurred while submitting the contact form",
          error
        );
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Invalid email address";
      }
    }

    if (formData.phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else {
      const PhoneRegex = /^\d{10,12}$/;
      if (!PhoneRegex.test(formData.phone)) {
        errors.phone = "Invalid Phone number";
      }
    }

    if (formData.subject.trim() === "") {
      errors.subject = "Subject is required";
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <>
      <Helmet>
        <title>
          Contact DashBack - Your Ultimate Cashback App Customer Support Team
        </title>
        <meta
          name="description"
          content="Need help or have a question about DashBack? Contact us today for quick and reliable support! Our friendly team is always here to assist you with any inquiries about our top-rated cashback app. Don't hesitate - get in touch now!"
        />
      </Helmet>

      <div className="container_contact">
        <div className="contect-text text-center">
          <h1>Let’s have a talk!</h1>
          <p>
            Reach out to us if you have questions or queries. We’d love to hear
            from you.
          </p>
        </div>
        <div className="col-lg-12 mb-5  row">
          <div className="col-lg-3"></div>

          <div
            className="col-lg-6   lable-text shadow"
            style={{
              paddingBottom: 25,
              paddingTop: 15,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onSubmit={handleSubmit}
          >
            <div className="Form-text_head">
              <h1>Details</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-4  ">
                <label>
                  Name<span>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className={`form-control  ${formErrors.name && "is-invalid"}`}
                  name="name"
                  style={{ fontSize: "14px" }}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <div className="invalid-feedback ">{formErrors.name}</div>
                )}
              </div>

              <div className=" col-lg-6 mt-4 " style={{}}>
                <label>
                  Contact no.<span>*</span>
                </label>
                <input
                  required
                  style={{ fontSize: "14px" }}
                  type="number"
                  placeholder=" Add your contact number"
                  className={`form-control ${formErrors.phone && "is-invalid"}`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <div className="invalid-feedback">{formErrors.phone}</div>
                )}
              </div>
            </div>
            <div className="col-lg-8 mt-4 ">
              <label>
                Email<span>*</span>
              </label>
              <input
                required
                style={{ fontSize: "14px" }}
                type="email"
                placeholder="Enter your email"
                className={`form-control ${formErrors.email && "is-invalid"}`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="col-lg-6 mt-4">
              <label>
                Subject<span>*</span>
              </label>
              <input
                style={{ fontSize: "14px" }}
                required
                type="email"
                placeholder="Add subject"
                className={`form-control ${formErrors.subject && "is-invalid"}`}
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {formErrors.subject && (
                <div className="invalid-feedback">{formErrors.subject}</div>
              )}
            </div>
            <div className="col-lg-12 mt-4">
              <label>
                Message<span>*</span>
              </label>
              <textarea
                required
                style={{ fontSize: "14px" }}
                type="message"
                placeholder="Type your message..."
                className={`form-control ${formErrors.message && "is-invalid"}`}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && (
                <div className="invalid-feedback ">{formErrors.message}</div>
              )}
            </div>
            <div className="col-lg-12 contect_button mt-4">
              <button className="" type="submit" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
};

export default ContectUS;
