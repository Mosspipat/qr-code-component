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
            maxWidth: "320px",
            margin: "auto",
          }}
        >
          <img
            style={{ borderRadius: "18px", maxWidth: "100%" }}
            alt="qrCode"
            src="../src/assets/image-qr-code.png"
          />

          <h1
            style={{
              fontSize: "1.6em",
              margin: "auto",
              padding: "20px 0px 0px 0px",
            }}
          >
            Improve your front-end skills by building projects
          </h1>
          <p
            style={{
              fontSize: "1.2em",
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
