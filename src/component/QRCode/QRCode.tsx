import React from "react";

const QRCode = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "32px",
          boxShadow: "4px 4px 24px black",
        }}
      >
        <img
          style={{ borderRadius: "18px" }}
          alt="qrCode"
          src="../src/assets/image-qr-code.png"
        />
        <div
          style={{
            maxWidth: "400px",
            margin: "auto",
            padding: "0px 0px",
          }}
        >
          <h1 style={{ fontSize: "32px" }}>
            Improve your front-end skills by building projects
          </h1>
          <p
            style={{
              fontSize: "24px",
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
