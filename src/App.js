import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({firstName: "", lastName: "", email:"",isVisible:"true", mode:"", selectCountry:""});
  // console.log(formData)

  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally Printing the Entire Data");
    console.log(formData)
  }



  return (
  <div className="App">
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={submitHandler}>

        {/* First Name */}
        <div className="form-group">
          <label htmlFor='firstName'>First Name</label>
          <input type='text' placeholder='Love'
            name='firstName' id='firstName' onChange={changeHandler} />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' placeholder='Babbar'
            name='lastName' id='lastName' onChange={changeHandler} />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor='email'>Email Address</label>
          <input type='email' placeholder='abc@gmail.com'
            name='email' id='email' onChange={changeHandler} />
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor='selectCountry'>Country</label>
          <select name='selectCountry' id='selectCountry' onChange={changeHandler} value={formData.selectCountry}>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="Austerialia">Austerialia</option>
          </select>
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor='street'>Street address</label>
          <input type='text' placeholder='1234 Main st'
            name='street' id='street' onChange={changeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor='cityName'>City</label>
          <input type='text' placeholder='Mumbai'
            name='cityName' id='cityName' onChange={changeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor='stateName'>State Name</label>
          <input type='text' placeholder='Maharashtra'
            name='stateName' id='stateName' onChange={changeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor='postalCode'>ZIP/Postal Code</label>
          <input type='text' placeholder='714526'
            name='postalCode' id='postalCode' onChange={changeHandler} />
        </div>

        {/* Checkboxes */}
        <div className="checkbox-group">
          <h4>By Email</h4>
          <label>
            <input type='checkbox' name='comments' onChange={changeHandler} />
            Comments – Get notified when someone posts a comment
          </label>
          <label>
            <input type='checkbox' name='candidate' onChange={changeHandler} />
            Candidate – Get notified when a candidate applies
          </label>
          <label>
            <input type='checkbox' name='offers' onChange={changeHandler} />
            Offers – Get notified when a candidate accepts/rejects
          </label>
        </div>

        {/* Radio buttons */}
        <fieldset className="radio-group">
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <label>
            <input type='radio' name='mode' value="everything-mode"
              checked={formData.mode === "everything-mode"} onChange={changeHandler} />
            Everything
          </label>
          <label>
            <input type='radio' name='mode' value="same-mode"
              checked={formData.mode === "same-mode"} onChange={changeHandler} />
            Same as email
          </label>
          <label>
            <input type='radio' name='mode' value="no-mode"
              checked={formData.mode === "no-mode"} onChange={changeHandler} />
            No push notification
          </label>
        </fieldset>

        {/* Submit */}
        <button className="submit-btn">Save</button>

      </form>
    </div>
  </div>
);

}

export default App;