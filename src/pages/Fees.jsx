import React from "react";
import "./fees.css";
import Footer from "../components/Footer";

const feeData = [
  {
    schedule: "1 Classes / Week",
    classes: "4 Classes Per Month",
    fee: "$17 / Month",
  },
  {
    schedule: "2 Classes / Week",
    classes: "8 Classes Per Month",
    fee: "$35 / Month",
  },
  {
    schedule: "3 Classes / Week",
    classes: "12 Classes Per Month",
    fee: "$45 / Month",
  },
  {
    schedule: "5 Classes / Week",
    classes: "20 Classes Per Month",
    fee: "$65 / Month",
  },
  {
    schedule: "6 Classes / Week",
    classes: "24 Classes Per Month",
    fee: "$75 / Month",
  },
];

const Fees = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
          {/* Main Fees Table */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white fw-bold">
                Fees
              </div>
              <div className="card-body">
                <p>
                  Fee structure furnished below is exclusive of 2 days trial
                  period and applies for monthly basis or as they wish, once
                  clients are satisfied enough to continue further.{" "}
                  <strong>Each class will be 30 minutes long</strong>
                </p>

                <table className="table table-bordered mt-3">
                  <thead className="table-success">
                    <tr>
                      <th>Schedule / Week</th>
                      <th>Classes per Month</th>
                      <th>Fee (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeData.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.schedule}</td>
                        <td>{item.classes}</td>
                        <td>{item.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="mt-2">
                  * Each additional student get a 5% discount. Register now for
                  a 2 day free trial - <a href="/">Click Here</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column gap-3">
            {/* Promote Quran Learning */}
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white fw-bold">
                PROMOTE QURAN LEARNING
              </div>
              <div className="card-body">
                <p>
                  Pass the knowledge of Quran by referring your friends &
                  relatives to this website. If you own a website, help promote
                  this site by linking to Quran Learning.
                </p>
              </div>
            </div>

            {/* Free Trial */}
            <div className="card shadow-sm bg-success text-white text-center">
              <div className="card-body">
                <p>Sign up now for a 2 day free trial evaluation.</p>
                <button className="btn btn-light btn-sm">Sign Up Now</button>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="card shadow-sm text-center">
              <div className="card-header bg-success text-white fw-bold">
                CONNECT WITH US
              </div>
              <div className="card-body d-flex justify-content-center gap-2">
                <button className="btn btn-success btn-sm rounded-circle">
                  F
                </button>
                <button className="btn btn-info btn-sm rounded-circle">
                  T
                </button>
                <button className="btn btn-danger btn-sm rounded-circle">
                  Y
                </button>
              </div>
            </div>
          </div>
          <div class="card">
            <h2 className="bg-success text-white rounded ">Free Trials</h2>
            <p>
              We will provide 2 day free trials to individuals. Our program is
              available to individuals of all ages, from children to old age
              people, without any distinction. Our courses usually take 3 to 6
              months to enable a student to read Qur'an accurately. But it
              mostly depends on the student's interest and capability.
            </p>
            <p>
              Fee is charged on monthly basis or as your wish, including the
              public holidays. Low income families are offered discount. We take
              fee in advance after you finished the trial classes and at the
              time of joining the regular classes.{" "}
              <strong>We accept payments through Venmo, Zelle & Paypal</strong>.
            </p>
            <p>
              Eid Holidays are included in the monthly fees of the students and
              there is no refund for that. These are twice in a year.
            </p>
            <p>
              You can choose the following schedules or a customized schedule as
              well which is not mentioned here. Weekend classes are possible as
              well with the same rate ratio.
            </p>
          </div>

          <div class="card">
            <h2 className="bg-success text-white rounded">Fees</h2>
            <p>
              Monthly fees vary depending on the program and schedule. Discounts
              are available for low-income families. Payment is collected in
              advance after trial classes and before joining regular classes.
            </p>
            <p>
              Payment methods accepted: <strong>Venmo, Zelle & Paypal</strong>
            </p>
            <p>
              No refund is available for holidays already included in the
              monthly fees.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fees;
