import React from "react";
import { useNavigate } from "react-router-dom";
import tickSquare from "../assets/images/Tick_Square.png";
import buttonPrimary from "../assets/images/default.png";

const GeneratedComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // ensure it appears above other elements
      }}
    >
      <div
        id="_1_453_Add_Task_Success"
        style={{
          background: "rgba(255, 255, 255, 1.00)",
          borderRadius: "30px",
          filter: "drop-shadow(1.0px 2.0px 6.0px 0.0px rgba(0, 110, 233, 0.30))",
          height: "42%",
          width: "27%", // square-like dimension
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          id="_1_454_Tick_Square"
          style={{
            position: "absolute",
            overflow: "hidden",
            background: "rgba(0, 0, 0, 0.00)",
            height: "90%",
            width: "60%",
            left: "10px",
            top: "10px",
          }}
        >
          <img
            id="_1_457"
            src={tickSquare}
            alt="Vector"
            style={{
              position: "absolute",
              left: "54%",
              top: "4%",
              alignSelf: "center"
            }}
          />
        </div>

        <span
          id="new_task_has_been_created_successfully"
          style={{
            color: "#000000ff",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "139%",
            textAlign: "center",
            position: "absolute",
            width: "100%",
            top: "120px",
          }}
        >
          New task has been created successfully
        </span>
        <img
          id="_1_459_button_primary_"
          src={buttonPrimary}
          alt="button_primary_default"
          style={{
            position: "absolute",
            left: "6%",
            top: "calc(100% * 0.63)",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default GeneratedComponent;
