const QRCode = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(0, 0%, 100%)",
          maxWidth: "360px",
          padding: "18px",
          borderRadius: "32px",
          boxShadow: "0px 3px 4px black",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.0em",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <img
            style={{ borderRadius: "18px", maxWidth: "100%" }}
            alt="qrCode"
            src="../src/assets/image-qr-code.png"
          />

          <div style={{ padding: "0px 1em" }}>
            <h2
              style={{
                margin: "auto",
                padding: "20px 0px 0px 0px",
              }}
            >
              Improve your front-end skills by building projects
            </h2>
            <p
              style={{
                color: "slategrey",
                fontStyle: "normal",
              }}
            >
              Scan the QR code to visite Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCode;
