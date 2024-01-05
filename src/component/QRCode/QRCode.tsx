import React from "react";

const QRCode = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: "30px",
          borderRadius: "32px",
          boxShadow: "0px 3px 4px black",
        }}
      >
        <div
          style={{
            width: "320px",
            margin: "auto",
          }}
        >
          <img
            style={{ borderRadius: "18px" }}
            alt="qrCode"
            src="../src/assets/image-qr-code.png"
            width="320px"
          />

          <h1 style={{ fontSize: "24px" }}>
            Improve your front-end skills by building projects
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "slategrey",
              fontStyle: "normal",
            }}
          >
            Scan the QR code to visite Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default QRCode;
