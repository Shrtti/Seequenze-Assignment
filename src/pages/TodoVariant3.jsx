import { useNavigate } from "react-router-dom";
import React from "react";
import plussign from "../assets/images/plus.png";
import dots from "../assets/images/dots.png";
import { useState } from "react";
import Calendar from "./Calendar";

const GeneratedComponent = () => {
  const navigate = useNavigate();
  const openCalendar = () => {
    setShowCalendar(true);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };
  
  return (
<div
  id="_1_413_to_do_Variant3"
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgba(255, 255, 255, 1.00)",
    borderColor: "#797979ff",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "10px",
    filter: "drop-shadow(0.0px 4.0px 4.0px 0.0px rgba(0, 0, 0, 0.25))",
    height: "80%", // Change height to auto for responsiveness
    width: "27%", // Set width to a percentage for responsiveness
    maxWidth: "400px", // Set a max width
    margin: "20px 450px", // Center align horizontally
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "10px",
    padding: "20px",
    zIndex: 1000,
    alignSelf : "center"
    
  }}
    >
      <div
        id="_1_414_Frame_94"
        style={{
          position: "relative",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "14px",
        }}
      >
        <div
          id="_1_415_Frame_78"
          style={{
            position: "relative",
            borderColor: "#e0e2e9ff",
            borderStyle: "solid",
            borderWidth: "0.0px 0.0px 1.0px 0.0px",
            height: "29.0px",
            width: "calc(100% - 0px - 0px)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            padding: "0px 0px 14px 0px",
          }}
        >
          <div
            id="_1_416_Frame_72"
            style={{
              position: "relative",
              height: "30.0px",
              flex: "1",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "6px",
            }}
          >
            <div
              id="_1_417_Ellipse_10"
              style={{
                position: "relative",
                background: "rgba(32, 231, 243, 1.00)",
                height: "8.0px",
                width: "8.0px",
                borderRadius: "50%",
                left: "0.0px",
                top: "11.0px",
              }}
            ></div>

            <span
              id="TO_DO"
              style={{
                color: "#000000ff",
                fontFamily: "Sans-serif",
                fontSize: "20.0px",
                fontWeight: "600",
                textAlign: "left",
                height: "2px",
                width: "auto",
                position: "relative",
              }}
            >
              ADD&nbsp;TASK
            </span>
          </div>

          <div
            id="_1_421_Frame_71"
            style={{
              position: "relative",
              background: "rgba(255, 255, 255, 1.00)",
              height: "auto",
              width: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              padding: "10px",
              margin: "auto"
            }}
          >
            <div
              id="_1_422_icons"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "20px",
                width: "20px",
              }}
            >
              <img
                id="I1_422_103_413_"
                src={plussign}
                alt="Vector__Stroke_"
                style={{
                  position: "absolute",
                  width: "80%",      // Ensure the image is visible within its container
                  height: "80%",
                }}
              />
            </div>
          </div>
        </div>

        <div
          id="_1_423_Frame_136"
          style={{
            position: "relative",
            height: "400.0px",
            width: "calc(100% - 0px - 0px)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "10px",
          }}
        >
          <div
            id="_1_424_Frame_95"
            style={{
              position: "relative",
              height: "400.0px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "14px"
            }}
          >
            <div
              id="_1_425_Frame_89"
              style={{
                position: "relative",
                background: "rgba(255, 255, 255, 1.00)",
                borderRadius: "16px",
                width: "calc(100% - 16px - 16px)",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                padding: "16px 16px 16px 16px",
              }}
            >
              <div
                id="_1_426_Frame_98"
                style={{
                  position: "relative",
                  width: "calc(100% - 0px - 0px)",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  gap: "10px",
                }}
              >
                <div
                  id="_1_427_Frame_99"
                  style={{
                    position: "relative",
                    background: "rgba(255, 255, 255, 1.00)",
                    borderColor: "#000000ff",
                    borderStyle: "solid",
                    borderWidth: "0.0px 0.0px 1.0px 0.0px",
                    width: "calc(100% - 0px - 0px)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    gap: "10px",
                  }}
                >
                  <div
                    id="_1_428_Frame_85"
                    style={{
                      position: "relative",
                      height: "24.0px",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      gap: "12px",
                    }}
                  >
                    <div
                      id="_1_429_Frame_84"
                      style={{
                        position: "relative",
                        height: "24.0px",
                        width: "calc(100% - 0px - 0px)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        gap: "10px",
                      }}
                    >
                      <div
                        id="_1_430_Frame_82"
                        style={{
                          position: "relative",
                          borderRadius: "12px",
                          height: "16.0px",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          gap: "10px",
                          padding: "4px 0px 4px 0px",
                        }}
                      >
                        <span
                          id="TASK_1"
                          style={{
                            color: "#111111ff",
                            fontFamily: "Sans-serif",
                            fontSize: "12.0px",
                            fontWeight: "700",
                            lineHeight: "16px",
                            
                            height: "auto",
                            width: "70%",
                            position: "relative",
                          }}
                        >
                          TASK&nbsp;1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    id="_1_434_icons"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      height: "80%",
                      width: "10%",
                    }}
                  >
                    <img
                      id="_1_435_Vector__"
                      src={dots}
                      alt="Vector__Stroke_"
                      style={{
                        position: "absolute",
                        left: "10%",
                        top: "10%",
                      }}
                    />
                  </div>
                </div>

                <span
                  id="text"
                  style={{
                    color: "#111111ff",
                    fontFamily: "Sans-serif",
                    fontSize: "14.0px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Ut diam tellus nunc
                  sed amet mauris molestie. Justo lacinia tristique sed
                  ullamcorper ipsum diam eget. Integer at tempor adipiscing ac
                  dui in bibendum tincidunt eget. Tempus proin amet adipiscing
                  amet lectus scelerisque at malesuada arcu. Pellentesque
                  aliquam aliquam in odio aenean sit risus imperdiet tristique.
                  Diam tristique purus et interdum nec quis. Feugiat vitae diam
                  egestas molestie non. Condimentum duis ut dui quis accumsan.
                  Ipsum aliquam fames eget metus suspendisse urna nam accumsan.
                </span>
              </div>

              <div
                id="_1_440_Frame_92"
                style={{
                  position: "relative",
                  width: "calc(100% - 0px - 0px)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  id="_1_441_Frame_90"
                  style={{
                    position: "relative",
                    height: "16.0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "10px",
                  }}
                >
                  <div
                    id="_1_445_Frame_89"
                    onClick={() => navigate("/Calendar")}
                    style={{
                      position: "relative",
                      height: "16.0px",
                      width: "55.0px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      gap: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      id="Deadline"
                      onClick={() => navigate("/Calendar")}
                      style={{
                        color: "#5a5a5aff",
                        fontFamily: "Sans-serif",
                        fontSize: "12.0px",
                        fontWeight: "700",
                        lineHeight: "16px",
                        textAlign: "left",
                        height: "16.0px",
                        width: "55.0px",
                        position: "relative",
                        cursor: "pointer",
                      }}
                       aria-label="Navigate to Calendar for Deadline details"
                    >
                      Deadline
                    </span>
                  </div>
                </div>

                <div
                  id="_1_448_Frame_93"
                  onClick={() => navigate("/AddTaskSuccess")}
                  style={{
                    position: "relative",
                    height: "16.0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "6px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    id="Assigned_to"
                    style={{
                      color: "#5a5a5aff",
                      fontFamily: "Sans-serif",
                      fontSize: "12.0px",
                      fontWeight: "700",
                      lineHeight: "16px",
                      textAlign: "left",
                      height: "16.0px",
                      width: "73.0px",
                      position: "relative",
                    }}
                  >
                    Assigned to
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;
