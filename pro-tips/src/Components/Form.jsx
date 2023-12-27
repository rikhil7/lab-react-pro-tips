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

    // console.log(formData);

    let errors = validate(formData);
    setFormError(errors);

    let errKeyArray = Object.keys(errors);
    if (errKeyArray.length == 0) {
      setFormSubmit(true);
      toast.success("Form Submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setFormSubmit(false);
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
    if (data.email.trim() == "") {
      err.email = "Please enter your Email";
    }
    if (data.phone.trim() == "") {
      err.phone = "Please enter your Phone Number";
    }
    if (data.phone.trim().length != 10) {
      err.phoneLength = "Please enter 10-digit Phone Number";
    }

    return err;
  };

  const phoneErrorHandler = ()=>{
    if(formError.phone){
      return(
        <p className="err">Enter Your Phone Number</p>
      )
    }else if (formError.phoneLength){
      return(
        <p className="err">Enter 10-Digit Phone Number</p>
      )
    }else{
      return("")
    }
  }

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
              <p className="err">Enter Your First Name</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label> Last Name : </label>
            <input type="text" name="lastName" onChange={handleInputChange} />
            {formError.lastName ? (
              <p className="err">Enter Your Last Name</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <label> Email : </label>
            <input type="email" name="email" onChange={handleInputChange} />
            {formError.email ? <p className="err">Enter Your Email</p> : ""}
          </div>

          <div>
            <label> Phone : </label>
            <input type="number" name="phone" onChange={handleInputChange} />
            {phoneErrorHandler()}
          </div>

          <div>
            <input type="submit" value="Register" onClick={formSubmitHandler} />
          </div>
        </form>
      </fieldset>
    </div>
  );
}
