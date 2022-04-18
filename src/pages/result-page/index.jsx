import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./style.module.css";
import luggage from "../../assets/Luggage.png";
import astronaut from "../../assets/ast.png";
import worldMap from "../../assets/worldMap.png";

import { useLocation } from "react-router-dom";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const ResultPage = () => {
  const query = useQuery();

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${worldMap})` }}
    >
      <div style={{ display: "flex" }}>
        {query.get("success") === "true" && (
          <div className={styles.successMessage}>
            <p style={{ margin: 0 }}>
              {query.get("message")}
            </p>
            <button>
              <FontAwesomeIcon icon={faX} style={{ marginLeft: 20 }} />
            </button>
          </div>
        )}
        {query.get("success") === "false" && (
          <div className={styles.failMessage}>
            <p style={{ margin: 0 }}>
              Your credit card payment was rejected by your bank. Please try
              again and contact your bank for assistance.
            </p>
            <button>
              <FontAwesomeIcon icon={faX} style={{ marginLeft: 20 }} />
            </button>
          </div>
        )}
      </div>
      {query.get("success") === "true" && (
      <img src={luggage} alt="luggage" className={styles.luggage} />
      )}
      {query.get("success") === "false" && (
      <img src={astronaut} alt="astronaut" className={styles.astronaut}/>
      )}
    </div>
  );
};

export default ResultPage;
