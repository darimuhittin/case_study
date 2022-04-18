import React from "react";
import TourCardMobile from "../../components/tour-card-mobile";
import TourCardDesktop from "../../components/tour-card-desktop";
import SummaryCard from "../../components/summary-card";
import styles from "./style.module.css";
import { useWindowSize } from "../../hooks/hooks";

import EyeSvg from "../../assets/eye.svg";
import EyeSlashSvg from "../../assets/eyeSlash.svg";
import background from "../../assets/plane.png";
import { FlightsApiService } from "../../services/api/ex.api.service";
import { PassangerApiService } from "../../services/api/passanger.api.service";

import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../../components/loading-spinner";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
        nameValid: action.payload.length > 0,
      };
    case "SET_SURNAME":
      return {
        ...state,
        surname: action.payload,
        surNameValid: action.payload.length > 0,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        emailValid: action.payload.length > 0,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
        addressValid: action.payload.length > 0,
      };
    default:
      return state;
  }
};

const FlightsPage = () => {
  const navigate = useNavigate();
  const [formData, dispatch] = React.useReducer(reducer, {
    name: "",
    surname: "",
    email: "",
    address: "",
    nameValid: false,
    surNameValid: false,
    emailValid: false,
    addressValid: false,
  });

  const [showErrors, setShowErrors] = React.useState(false);

  const [selectedFlight,setSelectedFlight] = React.useState(null);

  const [hideName, setHideName] = React.useState(false);
  const [hideSurName, setHideSurName] = React.useState(false);
  const [hideEmail, setHideEmail] = React.useState(false);
  const [hideAddress, setHideAddress] = React.useState(false);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [flights, setFlights] = React.useState([]);
  const size = useWindowSize();
  const [loading,setLoading] = React.useState(false);

  const handleSubmit = () => {
    setLoading(true);
    if (
      formData.nameValid &&
      formData.surNameValid &&
      formData.emailValid &&
      formData.addressValid
    ) {
      const service = new PassangerApiService();
      const passanger = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        address: formData.address,
      }
      service.createPassanger(passanger).then(res=>{
        setLoading(false);
          navigate(`/result?success=true&message=${res}`);
      }).catch(err=>{
        setLoading(false);
          navigate("/result?success=false");
      })
    } else {
      setShowErrors(true);
    }
  };
  React.useEffect(() => {
    const service = new FlightsApiService();
    service.getFlights().then((res) => {
      console.log(res);
      setFlights(res);
    });
  }, []);
  return (
    <div className={styles.container}>  
    {loading && <LoadingSpinner/>}
     
         <h1 className={styles.headingText}>
        First class travel at economy prices
      </h1>
      <p className={styles.littleText}>Select a tour that suits you below.</p>

      <div className={styles.littleContainer}>
        {activeIndex === 0 ? (
          <div className={styles.bigTable}>
            {flights.map((flight, index) => {
              if(size.width > 1024) {
                return <TourCardDesktop flight={flight} onSelect={(flight)=>{setSelectedFlight(flight)}} highlight={flight === selectedFlight}/>
              }else{
                return <TourCardMobile flight={flight} onSelect={(flight)=>{setSelectedFlight(flight)}} highlight={flight === selectedFlight}/>
              }
              
            })}
          </div>
        ) : (
          <div style={{ display: "flex", width: "100%", zIndex: 50 }}>
            <div className={styles.form}>
              <h3 className={styles.formHeader}>Passenger Information</h3>
              <p>
                The information below is needed to <br />
                book your vacation.
              </p>
              <div style={{ position: "relative" }}>
                <input
                  className={
                    formData.nameValid || !showErrors
                      ? styles.valid
                      : styles.error
                  }
                  type={hideName ? "password" : "text"}
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => {
                    dispatch({ type: "SET_NAME", payload: e.target.value });
                  }}
                />
                <button
                  className={styles.eyeIcon}
                  onClick={() => {
                    setHideName((old) => !old);
                  }}
                >
                  <img
                    src={hideName ? EyeSlashSvg : EyeSvg}
                    alt="eye"
                    width={20}
                    height={14}
                  />
                </button>
              </div>
              {!formData.nameValid && showErrors && (
                <span className={styles.errorText}>Please enter the name.</span>
              )}
              <div style={{ position: "relative" }}>
                <input
                  className={
                    formData.surNameValid || !showErrors
                      ? styles.valid
                      : styles.error
                  }
                  type={hideSurName ? "password" : "text"}
                  placeholder="Surname*"
                  value={formData.surname}
                  onChange={(e) => {
                    dispatch({ type: "SET_SURNAME", payload: e.target.value });
                  }}
                />
                <button
                  className={styles.eyeIcon}
                  onClick={() => {
                    setHideSurName((old) => !old);
                  }}
                >
                  <img
                    src={hideSurName ? EyeSlashSvg : EyeSvg}
                    alt="eye"
                    width={20}
                    height={14}
                  />
                </button>
              </div>
              {!formData.surNameValid && showErrors && (
                <span className={styles.errorText}>
                  Please enter the surname.
                </span>
              )}
              <div style={{ position: "relative" }}>
                <input
                  className={
                    formData.emailValid || !showErrors
                      ? styles.valid
                      : styles.error
                  }
                  type={hideEmail ? "password" : "text"}
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => {
                    dispatch({ type: "SET_EMAIL", payload: e.target.value });
                  }}
                />
                <button
                  className={styles.eyeIcon}
                  onClick={() => {
                    setHideEmail((old) => !old);
                  }}
                >
                  <img
                    src={hideEmail ? EyeSlashSvg : EyeSvg}
                    alt="eye"
                    width={20}
                    height={14}
                  />
                </button>
              </div>
              {!formData.emailValid && showErrors && (
                <span className={styles.errorText}>
                  Please enter the email.
                </span>
              )}
              <div style={{ position: "relative" }}>
                <input
                  className={styles.valid}
                  type={hideAddress ? "password" : "text"}
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => {
                    dispatch({ type: "SET_ADDRESS", payload: e.target.value });
                  }}
                />
                <button
                  className={styles.eyeIcon}
                  onClick={() => {
                    setHideAddress((old) => !old);
                  }}
                >
                  <img
                    src={hideAddress ? EyeSlashSvg : EyeSvg}
                    alt="eye"
                    width={20}
                    height={14}
                  />
                </button>
              </div>

              <button className={styles.submitButton} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}
        <div>
          {selectedFlight && <SummaryCard flight={selectedFlight}/>}
          <img
            src={background}
            alt=""
            style={{
              position: "absolute",
              right: 100,
              bottom: -400,
              zIndex: "1",
            }}
          />
          {selectedFlight && activeIndex === 0 && (
            <div
              style={{ display: "flex", justifyContent: "end", zIndex: "50" }}
            >
              <button
                onClick={() => {
                  setActiveIndex(1);
                }}
                className={styles.nextButton}
                style={{ zIndex: "50" }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
