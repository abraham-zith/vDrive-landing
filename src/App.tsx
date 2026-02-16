import { useState, useEffect } from "react";

import {
  UserOutlined,
  FileDoneOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  StarOutlined,
  AndroidOutlined,
  AppleOutlined,
  MobileOutlined,
  LinkedinFilled,
  TwitterOutlined,
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { IoCarSportOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
// import { MdStarRate } from "react-icons/md";

import { Button, Input, Steps } from "antd";
import googlePlay from "./assets/images/playStoreImg.png";
import appStore from "./assets/images/aple.png";
import { MdAlarm } from "react-icons/md";

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  // const isMobile = window.innerWidth <= 768;
  // const isTablet = window.innerWidth <= 1024;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stepForms = [
    // STEP 1
    <div
      style={{
        background: "white",
        padding: "60px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 4, fontSize: "15px" }}>General Information</h2>
      <p style={{ color: "#6b7280", marginBottom: 24, fontSize: "12px" }}>
        Tell us about yourself
      </p>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 20,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Input placeholder="Enter your full name" />
        <Input placeholder="+91 9876543210" />
      </div>

      <Input placeholder="your@email.com" style={{ marginBottom: 30 }} />

      <Button
        type="primary"
        style={{
          float: "right",
          borderRadius: 24,
          padding: isMobile ? "0 24px" : "0 32px",
        }}
        onClick={() => setCurrent(1)}
      >
        Continue →
      </Button>
    </div>,

    // STEP 2
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 4, fontSize: "15px" }}>
        Document Verification
      </h2>
      <p style={{ color: "#6b7280", marginBottom: 24, fontSize: "12px" }}>
        Upload required documents
      </p>

      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {["Aadhaar Card", "Driving License", "PAN Card (Optional)"].map(
          (doc) => (
            <div
              key={doc}
              style={{
                flex: 1,
                border: "2px dashed #c7d2fe",
                borderRadius: 12,
                padding: 30,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              ⬆️
              <p style={{ marginTop: 12, fontSize: "14px" }}>{doc}</p>
            </div>
          ),
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 24,
        }}
      >
        <Button
          type="primary"
          style={{
            fontSize: 13,
            height: 38,
            borderRadius: 20,
            padding: isMobile ? "0 20px" : "0 28px",
          }}
          onClick={() => setCurrent(2)}
        >
          Continue →
        </Button>
      </div>
    </div>,

    // STEP 3
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 4, fontSize: "14px" }}>
        Physical Verification
      </h2>
      <p style={{ color: "#6b7280", marginBottom: 24, fontSize: "14px" }}>
        Visit our Chennai office
      </p>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 24,
          marginBottom: 30,
        }}
      >
        <strong>📍 VDrive Head Office</strong>
        <p style={{ margin: "8px 0", fontSize: "14px" }}>Chennai, Tamil Nadu</p>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Face-to-face verification required
        </p>
      </div>

      <Button
        type="primary"
        style={{
          float: "right",
          borderRadius: 24,
          padding: "0 32px",
        }}
        onClick={() => setCurrent(0)}
      >
        Complete Registration →
      </Button>
    </div>,
  ];
  const rideTypes = [
    { label: "Round Trip", icon: <GrPowerReset /> },
    { label: "One Way", icon: <FaArrowUp /> },
    { label: "Outstation", icon: <FaRoute /> },
    { label: "Schedule Ride", icon: <MdAlarm /> },
  ];

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "fixed",
          width: "100%",
          background: "white",
          top: 0,
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <IoCarSportOutline />
          <span>VDrive</span>
        </div>

        <div
          style={{
            display: isMobile ? "none" : "flex",
            gap: 24,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <a
            href="#ride-types"
            style={{ textDecoration: "none", color: "#555" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            Ride Types
          </a>

          <a
            href="#drivers"
            style={{ textDecoration: "none", color: "#555" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            Drivers
          </a>

          <a
            href="#safety"
            style={{ textDecoration: "none", color: "#555" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            Safety
          </a>

          <a
            href="#join-driver"
            style={{ textDecoration: "none", color: "#555" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            Join as Driver
          </a>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            columnGap: "6px",
          }}
        >
          <Button style={{ borderRadius: "16px" }}> Login </Button>
          <Button
            style={{ color: "White", background: "blue", borderRadius: "16px" }}
          >
            {" "}
            Book Now
          </Button>
        </div>
      </div>

      <div>
        <div
          style={{
            minHeight: isMobile ? "auto" : "100vh",
            padding: isMobile ? "80px 20px 30px" : "100px 30px",
            background: "radial-gradient(circle at top, white, white)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? "20px" : "60px",
            }}
          >
            {/* LEFT CONTENT */}
            <div
              style={{
                width: isMobile ? "100%" : "50%",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* Tag */}
              <span
                style={{
                  background: "rgba(22, 119, 255, 0.15)", // light blue transparent
                  color: "#1677ff", // AntD blue
                  fontWeight: "600",
                  padding: "6px 14px",
                  borderRadius: "8px", // reduced radius
                  fontSize: "12px",
                  display: "inline-block",
                  marginBottom: "20px",
                  border: "1px solid rgba(22, 119, 255, 0.35)", // glass border
                  backdropFilter: "blur(6px)", // glass effect
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                India's #1 Verified Driver Platform
              </span>

              {/* Heading */}
              <h1
                style={{
                  fontSize: isMobile ? "32px" : "44px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  margin: "0 0 16px 0",
                  color: "#0f172a",
                }}
              >
                Book{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1677ff, #f8bbd0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  }}
                >
                  Verified Drivers
                </span>
                <br />
                Ride with{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1677ff, #f8bbd0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  }}
                >
                  Confidence
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  maxWidth: "520px",
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "30px",
                  marginLeft: isMobile ? "auto" : "0",
                  marginRight: isMobile ? "auto" : "0",
                }}
              >
                Professional, background-verified drivers for your personal
                vehicle. Safe, reliable service across 100+ cities.
              </p>

              {/* Ride Type Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "10px",
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                {rideTypes.map((item, index) => (
                  <button
                    key={index}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 30px 60px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.08)";
                    }}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      fontSize: "12px",
                      cursor: "pointer",
                      lineHeight: "1.2",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
              {/* Download app */}
              <div
                style={{
                  width: "100%",
                  padding: "15px 10px",
                  background: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  Download the app
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: isMobile ? "15px" : "30px",
                    alignItems: "flex-start",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#475569",
                        fontWeight: "600",
                        margin: "0 0 10px 0",
                      }}
                    >
                      For Riders
                    </p>

                    <div style={{ display: "flex", gap: "12px" }}>
                      <img
                        src={googlePlay}
                        alt="Google Play"
                        style={{
                          width: "120px",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "6px",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={appStore}
                        alt="App Store"
                        style={{
                          width: "120px",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "6px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#475569",
                        margin: "0 0 10px 0",
                        fontWeight: "600",
                      }}
                    >
                      For Drivers
                    </p>

                    <div style={{ display: "flex", gap: "12px" }}>
                      <img
                        src={googlePlay}
                        alt="Google Play"
                        style={{
                          width: "120px",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "6px",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={appStore}
                        alt="App Store"
                        style={{
                          width: "120px",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "6px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: isMobile ? "30px" : "50px",
                  background: "white",
                  padding: "20px",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>50K+</h3>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "12px" }}>
                    Drivers
                  </p>
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>1M+</h3>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "12px" }}>
                    Rides
                  </p>
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>4.9 ⭐</h3>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "12px" }}>
                    Rating
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE - FULLY RESPONSIVE FOR ALL DEVICES */}
            <div
              style={{
                width: isMobile ? "100%" : "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginTop: isMobile ? "30px" : "0",
                padding: isMobile ? "0 15px" : "0",
                boxSizing: "border-box",
              }}
            >
              {/* Back shadow layer */}
              <div
                style={{
                  position: "absolute",
                  width: isMobile ? "calc(100% - 30px)" : "560px",
                  maxWidth: isMobile ? "340px" : "560px",
                  height: isMobile ? "clamp(250px, 70vw, 300px)" : "380px",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, #e0f2fe, #ede9fe)",
                  transform: "rotate(-3deg)",
                  zIndex: 0,
                }}
              />

              {/* Main card */}
              <div
                style={{
                  width: isMobile ? "calc(100% - 30px)" : "560px",
                  maxWidth: isMobile ? "340px" : "560px",
                  height: isMobile ? "clamp(250px, 70vw, 300px)" : "380px",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, #fde7e9, #e0f2fe)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "visible",
                  zIndex: 1,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src="https://ride-zenith-motion.lovable.app/assets/hero-driver-CiLvS93v.png"
                  alt="Driver"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    padding: isMobile ? "15px" : "20px",
                    animation: "float 4s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Animation */}
          <style>
            {`
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
    100% { transform: translateY(0); }
  }
`}
          </style>
        </div>
      </div>

      {/* Sections */}
      <div
        id="ride-types"
        style={{
          // padding: "50px 40px",
          background: "white",
        }}
      >
        {/* Heading Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px", // 👈 controls gap properly
          }}
        >
          <h1
            style={{
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: "12px",
            }}
          >
            Choose Your Ride Type
          </h1>
          <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto" }}>
            Whether it's a quick errand or a cross-country journey, we've got
            the perfect ride for you.
          </p>
        </div>

        {/* Cards Section */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Round Trip",
              desc: "Perfect for day trips and errands. Pick up and drop back at your location.",
              points: [
                "Same day return",
                "Flexible timing",
                "Best for shopping",
              ],
              icon: "🔄",
            },
            {
              title: "One Way",
              desc: "Direct travel from point A to B. Ideal for airport transfers.",
              points: ["Direct route", "Airport transfers", "No return needed"],
              icon: "➡️",
            },
            {
              title: "Outstation",
              desc: "Long distance travel across cities. Experienced highway drivers.",
              points: ["Multi-day trips", "Highway experts", "Luggage space"],
              icon: "🌍",
            },
            {
              title: "Scheduled Ride",
              desc: "Book in advance for important events. Driver arrives on time.",
              points: [
                "Advance booking",
                "Guaranteed availability",
                "Event-ready",
              ],
              icon: "⏰",
            },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              style={{
                width: isMobile ? "100%" : "260px",

                background: "#ffffff",
                borderRadius: "20px",
                padding: "14px",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                cursor: "pointer",

                /* ✨ Animation */
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "14px",
                    background: "#e6f4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    marginBottom: "16px",
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ padding: "10px" }}>
                  <h3
                    style={{
                      margin: "0 0 8px 0",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "revert-layer",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "14px", color: "black" }}>{item.desc}</p>

              <ul
                style={{
                  paddingLeft: "0px",
                  color: "#475569",
                  fontSize: "14px",
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                {item.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                style={{
                  marginTop: "auto",
                  color: "#0da2e7",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        id="drivers"
        style={{
          minHeight: "100vh",
          padding: "120px 40px",
          background: "white",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px", // 👈 controls gap properly
          }}
        >
          <h1
            style={{
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: "12px",
            }}
          >
            Choose Your Driver
          </h1>
          <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto" }}>
            All drivers are verified and rated. Pick the perfect match for your
            journey..
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "28px",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "60px 20px",
            background: "white",
          }}
        >
          {[
            {
              badge: "Most Popular",
              title: "Premium Driver",
              subtitle: "Luxury experience for VIP rides",
              desc: "Top-rated drivers with luxury vehicle expertise.",
              features: [
                "5-star rated drivers only",
                "Luxury car experience",
                "Corporate & VIP events",
                "Multi-language support",
              ],
              price: "₹599",
              primary: true,
              button: "Select Premium",
              icon: "👑",
            },
            {
              title: "Elite Driver",
              subtitle: "Professional highway experts",
              desc: "Experienced long-distance drivers for outstation trips.",
              features: [
                "Highway driving certified",
                "Long-distance specialists",
                "Night driving trained",
                "First-aid certified",
              ],
              price: "₹449",
              button: "Select Elite",
              icon: "⭐",
            },
            {
              title: "Standard Driver",
              subtitle: "Reliable everyday rides",
              desc: "Verified, reliable drivers for your daily commute.",
              features: [
                "Fully verified drivers",
                "Perfect for daily use",
                "Punctual & professional",
                "Affordable pricing",
              ],
              price: "₹299",
              button: "Select Standard",
              icon: "🛡️",
            },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              style={{
                width: "300px",
                background: "#fff",
                borderRadius: "24px",
                padding: "28px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: item.primary
                  ? "2px solid #0da2e7"
                  : "1px solid #e5e7eb",

                transition: "all 0.35s ease",
              }}
            >
              {/* Badge */}
              {item.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0da2e7",
                    color: "#fff",
                    padding: "4px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {item.badge}
                </div>
              )}

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: item.primary ? "#0da2e7" : "#e6f4ff",
                  color: item.primary ? "#fff" : "#0da2e7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "600" }}>
                {item.title}
              </h2>

              <span
                style={{
                  color: "#0da2e7",
                  fontSize: "14px",
                  marginTop: "4px",
                }}
              >
                {item.subtitle}
              </span>

              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginTop: "12px",
                }}
              >
                {item.desc}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "#0f172a",
                }}
              >
                {item.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#e6f4ff",
                        color: "#0da2e7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div style={{ marginTop: "20px" }}>
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  {item.price}
                </span>
                <span style={{ color: "#64748b" }}>/ride</span>
              </div>

              {/* Button */}
              <button
                style={{
                  marginTop: "24px",
                  padding: "12px",
                  borderRadius: "14px",
                  border: item.primary ? "none" : "2px solid #bae6fd",
                  background: item.primary ? "#0da2e7" : "#fff",
                  color: item.primary ? "#fff" : "#0da2e7",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        id="safety"
        style={{
          minHeight: "100vh",
          //padding: "120px 40px",
          background: "white",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px", // 👈 controls gap properly
          }}
        >
          <h1
            style={{
              fontWeight: "600",
              fontSize: "32px",
              marginBottom: "12px",
            }}
          >
            Trust & Safety
          </h1>
          <p
            style={{
              color: "#64748b",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "14px",
            }}
          >
            Your safety is our top priority. Every VDrive journey is backed by
            our verification process.
          </p>
        </div>

        <div
          style={{
            background: "white",
            // padding: "80px 24px",
          }}
        >
          {/* TOP CARDS */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            {[
              {
                title: "Verified Drivers",
                desc: "Every driver undergoes thorough background verification.",
                icon: "🛡️",
              },
              {
                title: "Document Checked",
                desc: "Aadhaar and driving license verified for authenticity.",
                icon: "📄",
              },
              {
                title: "Face-to-Face",
                desc: "Physical verification at our Chennai office.",
                icon: "👤",
              },
              {
                title: "Secure Rides",
                desc: "End-to-end encryption and secure payments.",
                icon: "🔒",
              },
            ].map((item, index) => (
              <div
                key={index}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.08)";
                }}
                style={{
                  width: "260px",
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  textAlign: "center",
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",

                  transition: "all 0.35s ease",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "#e6f4ff",
                    color: "#0da2e7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    margin: "0 auto 18px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    lineHeight: "1.5",
                    marginBottom: "16px",
                  }}
                >
                  {item.desc}
                </p>

                {/* Verified */}
                <div
                  style={{
                    color: "#0da2e7",
                    fontSize: "14px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  ✓ Verified
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM STATS BAR */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "white ",
              borderRadius: "20px",
              padding: "32px 20px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
          >
            {[
              { value: "100%", label: "Verified" },
              { value: "24/7", label: "Support" },
              { value: "0", label: "Incidents" },
              { value: "4.9★", label: "Trust Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#0da2e7",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginTop: "6px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="join-driver"
        style={{
          minHeight: isMobile ? "auto" : "100vh",
          background: "white",
          padding: isMobile ? "80px 20px 40px" : "100px 40px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          <h1
            style={{
              fontWeight: 600,
              fontSize: 28,
              marginBottom: 8,
            }}
          >
            Become a VDrive Driver
          </h1>
          <p
            style={{
              color: "#64748b",
              maxWidth: 480,
              margin: "0 auto",
              fontSize: 13, // 🔽 reduced
            }}
          >
            Join thousands of verified drivers earning with VDrive.
          </p>
        </div>

        {/* CENTER CONTAINER */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* COLUMN WRAPPER */}
          <div
            style={{
              width: isMobile ? "100%" : "60%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* STEPS */}
            <div style={{ width: isMobile ? "100%" : "60%", marginBottom: 32 }}>
              <Steps
                current={current}
                onChange={(value) => setCurrent(value)}
                responsive={false}
                size="small"
                items={[
                  { icon: <UserOutlined /> },
                  { icon: <FileDoneOutlined /> },
                  { icon: <EnvironmentOutlined /> },
                ]}
              />
            </div>

            {/* FORM */}
            <div style={{ width: "100%" }}>{stepForms[current]}</div>
          </div>
        </div>
      </div>
      <div
        style={{
          minHeight: isMobile ? "auto" : "100vh",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "40px 20px" : 0,
        }}
      >
        {/* MAIN WRAPPER */}
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            display: "flex",
            gap: isMobile ? 40 : 80,
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Book Your First Ride Today
            </h1>

            <p
              style={{
                fontSize: 15,
                color: "#64748b",
                maxWidth: 420,
                lineHeight: 1.6,
                marginBottom: 40,
              }}
            >
              Join millions of happy riders who trust VDrive for safe, reliable
              driver services.
            </p>

            {/* FEATURES */}
            {[
              {
                icon: <ClockCircleOutlined />,
                text: "Get a driver in minutes",
              },
              {
                icon: <SafetyCertificateOutlined />,
                text: "100% verified drivers",
              },
              {
                icon: <StarOutlined />,
                text: "Top-rated professionals",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: 18,
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ fontSize: 15 }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* RIGHT FORM CARD */}
          <div
            style={{
              flex: 1,
              background: "white",
              padding: 36,
              borderRadius: 20,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              maxWidth: 420,
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 600,
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              Get Started Free
            </h2>

            <p
              style={{
                fontSize: 13,
                color: "#64748b",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              No payment required to sign up
            </p>

            {/* INPUTS */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13 }}>Full Name</label>
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your full name"
                style={{ marginTop: 6, height: 42 }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13 }}>Phone Number</label>
              <Input
                prefix={<PhoneOutlined />}
                placeholder="+91 9876543210"
                style={{ marginTop: 6, height: 42 }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 13 }}>Email Address</label>
              <Input
                prefix={<MailOutlined />}
                placeholder="your@email.com"
                style={{ marginTop: 6, height: 42 }}
              />
            </div>

            {/* BUTTON */}
            <Button
              type="primary"
              block
              style={{
                height: 46,
                borderRadius: 24,
                fontSize: 14,
              }}
            >
              Create Free Account →
            </Button>

            <p
              style={{
                fontSize: 11,
                color: "#64748b",
                textAlign: "center",
                marginTop: 16,
                lineHeight: 1.5,
              }}
            >
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "50px 40px",
          background: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* MAIN WRAPPER */}
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 32,
          }}
        >
          {/* RIDER CARD */}
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
            }}
            style={{
              background: "#ffffff",
              borderRadius: 20,
              //padding: 36,

              transition: "all 0.3s ease",
              cursor: "pointer",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                color: "#0284c7",
                fontSize: 22,
              }}
            >
              <MobileOutlined />
            </div>

            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              Download Rider App
            </h2>

            <p
              style={{
                fontSize: 14,
                color: "#64748b",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Book verified drivers instantly. Available on iOS and Android.
            </p>

            <button
              style={{
                width: "100%",
                height: 46,
                background: "#0f172a",
                color: "#fff",
                border: "none",
                borderRadius: 24,
                fontSize: isMobile ? 12 : 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: 12,
                cursor: "pointer",
              }}
            >
              <AndroidOutlined />
              Get it on Google Play
            </button>

            <button
              style={{
                width: "100%",
                height: 46,
                background: "#fff",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                borderRadius: 24,
                fontSize: isMobile ? 12 : 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <AppleOutlined />
              Download on App Store
            </button>
          </div>

          {/* DRIVER CARD */}
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
            }}
            style={{
              background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
              borderRadius: 20,
              padding: 36,

              transition: "all 0.3s ease",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                fontSize: 22,
              }}
            >
              <MobileOutlined />
            </div>

            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              Download Driver App
            </h2>

            <p
              style={{
                fontSize: 14,
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Start earning as a VDrive driver. Join our network today.
            </p>

            <button
              style={{
                width: "100%",
                height: 46,
                background: "#ffffff",
                color: "#020617",
                border: "none",
                borderRadius: 24,
                fontSize: isMobile ? 12 : 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: 12,
                cursor: "pointer",
              }}
            >
              <AndroidOutlined />
              Get it on Google Play
            </button>

            <button
              style={{
                width: "100%",
                height: 46,
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 24,
                fontSize: isMobile ? 12 : 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <AppleOutlined />
              Download on App Store
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(135deg, #0b132b, #0f1c3f)",
          color: "#fff",
          padding: "30px 60px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* TOP */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* LOGO SECTION */}
          <div style={{ maxWidth: "280px" }}>
            <h2 style={{ marginBottom: "12px" }}>
              <IoCarSportOutline /> VDrive
            </h2>
            <p
              style={{ color: "#bfc6d4", lineHeight: "1.6", fontSize: "13px" }}
            >
              India's most trusted platform for verified driver services.
            </p>

            <p style={{ margin: "24px 0 10px", fontSize: "13px" }}>
              Download the app
            </p>

            <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
              <img
                src={googlePlay}
                alt="Google Play"
                style={{
                  height: "36px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />

              <img
                src={appStore}
                alt="App Store"
                style={{
                  height: "36px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          {/* COMPANY */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ marginBottom: "16px" }}>Company</h4>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>About Us</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Careers</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Press</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Blog</p>
          </div>

          {/* RIDERS */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ marginBottom: "16px" }}>For Riders</h4>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Book a Driver</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Ride Types</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Pricing</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Safety</p>
          </div>

          {/* DRIVERS */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ marginBottom: "16px" }}>For Drivers</h4>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>
              Become a Driver
            </p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>
              Driver Benefits
            </p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Requirements</p>
            <p style={{ color: "#bfc6d4", fontSize: "13px" }}>Driver Support</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            margin: "40px 0 20px",
          }}
        />

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p style={{ color: "#bfc6d4", fontSize: "13px" }}>
            © 2026 VDrive. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "14px" }}>
            {[
              <FacebookFilled key="fb" />,
              <TwitterOutlined key="tw" />,
              <InstagramOutlined key="ig" />,
              <LinkedinFilled key="li" />,
            ].map((icon, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <span
              style={{ color: "#bfc6d4", cursor: "pointer", fontSize: "13px" }}
            >
              Privacy Policy
            </span>
            <span
              style={{ color: "#bfc6d4", cursor: "pointer", fontSize: "13px" }}
            >
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
