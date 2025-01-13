import React from "react";
import SOG from "../pic/c-a.jpg";
import "../css-code/SOffer.css";
import { Link, Outlet } from 'react-router-dom'
export default function SOffer() {
  return (
    <>
      <div class="soffer-m-div">
        <div class="soffer-second-div">
          <div class="soffer-header">
            SPECIAL OFFER THIS SUMMER GET FULL BENIFITS FOR YEAR WITH 20%
            DISCOUNT.
          </div>
          <div class="soffer-disc">
            Spacia offer to get access to this package to join our gim and get
            spacia package. Spacia offer to get access to this package to join
            our gim and get spacia package
            <Link className="so-button" to="/form">BACOME A MEMBER</Link>
            {/* <div class="so-button">BECOME A MEMBER</div> */}
          </div>
        </div>
        <div class="soffer-img-div">
          <img className="soffer-img" src={SOG} alt="" />
        </div>
      </div>
    </>
  );
}
