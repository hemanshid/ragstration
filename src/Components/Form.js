

import React from 'react';
import { useFormik } from 'formik';

const Form = () => {

 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      languages: '',
      gender: '',
      address: '',
      country: '',
      city: '',
      phoneNumber: '',
    },

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm(values);
    },
  });

  return (
    <>
    <h4 className="heading">STUDENT REGISTRATION FORM</h4>
    <div className="form-container">
      
      <form onSubmit={formik.handleSubmit} className="form-content">


        <div className="form-group">
          <label>First Name</label>
          <input id="firstName" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName} className="form-control" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input id="lastName" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} className="form-control" />
        </div>

        <div className="form-group">
          <label>Email ID</label>
          <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} className="form-control" />
        </div>

        <div className="form-group">
          <h2>Languages</h2>
          <label>
            <input id="languages" type="checkbox" name="languages" value="English" onChange={formik.handleChange} />
            English
          </label>
          


          <label>
            <input type="checkbox" name="languages" value="Gujarati" onChange={formik.handleChange} />
            Gujarati
          </label>


          <label>
            <input type="checkbox" name="languages" value="Hindi" onChange={formik.handleChange} />
            Hindi
          </label>
        </div>

        <div className="form-group">
          <h2>Gender</h2>
          <label>
            <input type="radio" name="gender" value="male" onChange={formik.handleChange} />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="female" onChange={formik.handleChange} />
            Female
          </label>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input id="address" name="address" type="text" onChange={formik.handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input id="country" name="country" type="text" onChange={formik.handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>City</label>
          <input id="city" name="city" type="text" onChange={formik.handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label >Phone Number</label>

          <input type="text" id="phoneNumber" name="phoneNumber" title="Error Message" pattern="[1-9]{1}[0-9]{9}" onChange={formik.handleChange}/> 
          {/* <input id="phoneNumber" name="phoneNumber" type="text" onChange={formik.handleChange} className="form-control" /> */}
        </div>

        <button type="submit" className="submit-button">Submit</button>
        

      </form>
    </div>
    </>
  );
};

export default Form;
