import React from "react";
import { TextField } from "@mui/material";
import Select from "./Selectt";
import City from "./City";
import Specialisation from "./Specialisation";
import Datee from "./Datee";
import Phone from "./Phone";
import { FaUserNurse } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Form = () => {
  return (
    <div className="wrapper">
      <div className="main_container">
        <div className="pic_container">
            <div className="heading">
                <h3>Get Best University at Affordable Fee</h3>
                <p><AiFillStar/>Real time data of universities to help to decide</p>
                <p><AiFillStar/>Dedicated assistance from our certified experts</p>
                <div className="image">
                    <img src="https://collegevidya.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Funo.0ccbceaf.png&w=256&q=75" alt="" />
                </div>
            </div>
        </div>
        <div className="form_container">
          <form>
            <div className="form_heading">
                <h3>Compare and select from 100 +</h3>
                <h4>Best university for your online MBA course</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, quos.
                </p>
            </div>
            <div className="inpput">
              <div className="label">
                <FaUserNurse/><label htmlFor="GD1">Male</label>
                <input name="Gender" type="radio" id="Gd1" value="Male" />
              </div>

              <div className="label">
              <FaUserNurse/><label htmlFor="GD2">Female</label>
                <input type="radio" name="Gender" id="Gd2" value="Female" />
              </div>

              <div className="label1">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  style={{ width: "280px" }}
                />
              </div>

              <div className="label1">
                <TextField
                  id="outlined-basic"
                  type={"email"}
                  label="Email"
                  variant="outlined"
                  style={{ width: "280px" }}
                />
              </div>

              <div className="label1">
             

                <Phone/>
              </div>

              <div className="date">                
                <Datee/>
              </div>

              <div className="selection">
                <Select />
                <City />
              </div>
              <div>
                <Specialisation />
              </div>

              <button className="btn">Find Best University <span className="arrow"><FaArrowRight/></span></button>
            </div>
            <div className="personnel">
                <p><AiFillLock color="black"/>Your personal information is secure with us</p>
            </div>

            <div className="experts">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRK9G1gLg5pdVa2sjR4O0p77lsv7bdY9MX9Q&usqp=CAU" alt="pic" />
                <p>Connect with top CV Experts</p>
                <AiTwotoneStar color="yellow"/>
                <AiTwotoneStar color="yellow"/>
                <AiTwotoneStar color="yellow"/>
                <AiTwotoneStar color="yellow"/>
                <AiTwotoneStar color="yellow"/>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
