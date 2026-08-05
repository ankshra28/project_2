
import React, { useState } from "react";
import styles from "./Career.module.css";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

// const jobs = [
//   {
//     id: 1,
//     title: "Event Decorator",
//     location: "Delhi",
//     type: "Full Time",
//     salary: "₹20,000 - ₹35,000",
//   },
//   {
//     id: 2,
//     title: "Sales Executive",
//     location: "Mumbai",
//     type: "Full Time",
//     salary: "₹18,000 - ₹30,000",
//   },
//   {
//     id: 3,
//     title: "Customer Support",
//     location: "Work From Home",
//     type: "Remote",
//     salary: "₹15,000 - ₹25,000",
//   },
//   {
//     id: 4,
//     title: "Digital Marketing Executive",
//     location: "Bangalore",
//     type: "Full Time",
//     salary: "₹25,000 - ₹40,000",
//   },
// ];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState("");

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  return (
    <div className={styles.career}>

      {/* Hero */}

      <section className={styles.hero}>
        <h1>Join Our Team</h1>
        <p>
          Build your career with EventDecor and create unforgettable
          celebrations across India.
        </p>
      </section>

      {/* Why Join */}

      <section className={styles.why}>
        <h2>Why Work With Us?</h2>

        <div className={styles.features}>

          <div className={styles.feature}>
            <h3>💼 Career Growth</h3>
            <p>Grow with experienced professionals.</p>
          </div>

          <div className={styles.feature}>
            <h3>🎉 Friendly Environment</h3>
            <p>Positive and supportive workplace.</p>
          </div>

          <div className={styles.feature}>
            <h3>📈 Learning Opportunities</h3>
            <p>Regular training and skill development.</p>
          </div>

          <div className={styles.feature}>
            <h3>🏆 Rewards</h3>
            <p>Performance-based incentives and bonuses.</p>
          </div>

        </div>
      </section>

      {/* Jobs */}

      {/* <section className={styles.jobs}>

        <h2>Current Openings</h2>

        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>

            <div>
              <h3>{job.title}</h3>

              <p>
                <FaMapMarkerAlt /> {job.location}
              </p>

              <p>
                <FaClock /> {job.type}
              </p>

              <p>
                <FaMoneyBillWave /> {job.salary}
              </p>
            </div>
             

            <button onClick={() => handleApply(job.title)}>
              Apply Now
            </button> 

          </div>
        ))}

      </section>
      */}

      {/* Form */}

      <section className={styles.formSection}>

        <h2>Apply for {selectedJob || "a Position"}</h2>

        <form className={styles.form}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            value={selectedJob}
            readOnly
            placeholder="Job Position"
          />

          <textarea
            rows="5"
            placeholder="Tell us about yourself..."
          ></textarea>

          <input type="file" />

          <button type="submit">
            Submit Application
          </button>

        </form>

      </section>

    </div>
  );
};

export default Career;