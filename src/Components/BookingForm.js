import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const submitAPI = function (formData) {
  return true;
};

const BookingForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: props.availableTimes[0],
    guests: 1,
    occasion: "Birthday",
  });
  const [formErrors, setFormErrors] = useState({
    date: false,
    guests: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      props.dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let errors = {};
    let isValid = true;

    if (formData.date === "") {
      errors.date = true;
      isValid = false;
    }

    if (formData.guests < 1) {
      errors.guests = true;
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      console.log("Form Data:", formData);
      console.log(submitAPI(formData));
      navigate("../thank-you");
    }
  };

  return (
    <div className="container">
      <h1>Book now</h1>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className={formErrors.date ? "error" : ""}
        />
        {formErrors.date && (
          <p className="error-message">Please choose a date.</p>
        )}

        {props.availableTimes.length > 0 ? (
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            {props.availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        ) : (
          <p>We have no times available</p>
        )}

        <label htmlFor="res-guests">Number of guests</label>
        <input
          type="number"
          id="res-guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          required
          className={formErrors.guests ? "error" : ""}
        />
        {formErrors.guests && (
          <p className="error-message">
            Please enter a valid number of guests.
          </p>
        )}

        <label htmlFor="res-occasion">Occasion</label>
        <select
          id="res-occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="submit" disabled={!formData.date || !formData.guests}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
