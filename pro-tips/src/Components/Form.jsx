import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Forms() {
  //state to check if form is submitted
  const [formSubmit, setFormSubmit] = useState(false);

  //state to keep track of all errors
  const [formError, setFormError] = useState({});

  //state to keep track of all form data
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  // const firstNameHandler = (e)=>{
  //     setFormData({
  //         ...formData, firstName: e.target.value
  //     })
  //     console.log(formData)

  // }
  // const emailhandler = (e)=>{
  //     setFormData({
  //         ...formData, email: e.target.value
  //     })
  //     console.log(formData)

  // }
  // const lastNameHandler = (e)=>{
  //     setFormData({
  //         ...formData, lastName: e.target.value
  //     })
  //     console.log(formData)
  // }
  // const phoneHandler = (e)=>{
  //     setFormData({
  //         ...formData, phone: e.target.value
  //     })
  //     console.log(formData)

  // }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData)
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let errors = validate(formData);
    setFormError(errors);

    let errKeyArray = Object.keys(errors);
    if (errKeyArray.length === 0) {
      setFormSubmit(true);
      toast.success("Form Submitted", {
        // ... (unchanged options)
      });
    } else {
      setFormSubmit(false);

      // Display error toasts
      errKeyArray.forEach((key) => {
        toast.error(errors[key], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }
  };

  const validate = (data) => {
    //make an error object
    let err = {};

    if (data.firstName.trim() == "") {
      err.firstName = "Please enter your First Name";
    }
    if (data.lastName.trim() == "") {
      err.lastName = "Please enter your Last Name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email.trim() == "") {
      err.email = "Please enter your Email";
    }else if (!emailRegex.test(data.email.trim())) {
      err.email = "Please enter a valid Email with @ and a official domain";
    }
    if (data.phone.trim() == "") {
      err.phone = "Please enter your Phone Number";
    }else if (data.phone.trim().length != 10) {
      err.phone = "Please enter 10-digit Phone Number";
    }
    

    return err;
  };


  return (
    <div id="form">
      <ToastContainer />
      <fieldset>
        <legend>Fill This Form</legend>

        <form>
          {formSubmit ? (
            <div className="success">
              <p>Registration Successful! 🥂</p>
            </div>
          ) : (
            ""
          )}
          <div>
            <label> First Name : </label>
            <input type="text" name="firstName" onChange={handleInputChange} />
            {formError.firstName ? (
              <p className="err">{formError.firstName}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label> Last Name : </label>
            <input type="text" name="lastName" onChange={handleInputChange} />
            {formError.lastName ? (
              <p className="err">{formError.lastName}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label> Email : </label>
            <input type="email" name="email" onChange={handleInputChange} />
            {formError.email ? <p className="err">{formError.email}</p> : ""}
          </div>

          <div>
            <label> Phone : </label>
            <input type="number" name="phone" onChange={handleInputChange} />
            {formError.phone ? <p className="err">{formError.phone}</p> : ""}
          </div>

          <div>
            <input type="submit" value="Register" onClick={formSubmitHandler} />
          </div>
        </form>
      </fieldset>
    </div>
  );
}
