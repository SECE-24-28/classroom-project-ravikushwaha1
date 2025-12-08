import React, { useState } from "react";
import { styles } from "./sign-up-style.js";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "AGH B2C",
    department: "CSE",
    email: "",
    mobile: "",
    passoutYear: "2024",
    ugOrPg: "UG",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
    console.log("Form submitted:", formData);
  };

  const passwordRequirements = [
    "minimum 8 character",
    "one lowercase character",
    "one special character",
    "one uppercase character",
    "one number",
  ];

  // Options for dropdowns
  const colleges = ["AGH B2C", "Sri Eshwar College of Enginnering Coimbatore", "College 2"];
  const departments = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
  const years = ["2024", "2023", "2022", "2021", "2020"];
  const programs = ["UG", "PG"];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Welcome to</h1>
        <h2 style={styles.h2}>Aptitude Guru Hem LMS</h2>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* First Name & Last Name */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        </div>

        {/* College & Department */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Select College</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              style={styles.select}
              required
            >
              {colleges.map((college, index) => (
                <option key={index} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              style={styles.select}
              required
            >
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* Mobile, Passout Year, UG/PG */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Mobile</label>
            <div style={styles.mobileContainer}>
              <span style={styles.countryCode}>IND</span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                style={styles.mobileInput}
                required
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Select Passout Year</label>
            <select
              name="passoutYear"
              value={formData.passoutYear}
              onChange={handleChange}
              style={styles.select}
              required
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Ug or Pg</label>
            <select
              name="ugOrPg"
              value={formData.ugOrPg}
              onChange={handleChange}
              style={styles.select}
              required
            >
              {programs.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter the password"
                value={formData.password}
                onChange={handleChange}
                style={styles.passwordInput}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showButton}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Enter the confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.passwordInput}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.showButton}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        {/* Password Requirements */}
        <div style={styles.requirementsBox}>
          <ul style={styles.requirementsList}>
            {passwordRequirements.map((req, index) => (
              <li key={index} style={styles.requirementItem}>
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;