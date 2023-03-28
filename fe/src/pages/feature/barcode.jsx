import React, { useEffect, useState, useContext } from "react";
import UI from "@component/gip-ui";
import useMediaQuery from "@mui/material/useMediaQuery";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useZxing } from "react-zxing";
// import { QrReader as BarcodeScannerComponent } from "react-qr-reader";
import sampleQR from "@img/sampleqr.jpg";
import Drawer from "@mui/material/Drawer";

export const meta = {
  title: "barcode",
  icon: "thisIcon",
  order: 2,
};

export default function App() {
  return (
    <UI.Stack
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      pt={2}
    >
      <h5 className="text-center ">Scanner Test</h5>
      <UI.Stack height={"240px"}>
        <img
          src={sampleQR}
          alt=""
          style={{
            objectFit: "contain",
            height: "100%",
          }}
        />
      </UI.Stack>
      <HandleInput />
      <Welcome />
    </UI.Stack>
  );
}

function HandleInput(props) {
  const [cameraError, setcameraError] = useState(false);
  const [scanresult, setscanresult] = useState();
  const [debug, setdebug] = useState({
    os: getOperatingSystem(),
    browser: getBrowser(),
    version: getBrowserVersion(),
    cameraError: "",
    cameraOk: "",
    HTTPS: "Ok",
  });

  const ss = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [isOpen, setisOpen] = useState(false);

  React.useEffect(() => {
    if (!navigator.mediaDevices) {
      setdebug({ ...debug, HTTPS: "Application not in HTTPS " });
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          setdebug({ ...debug, cameraOk: "Ok" });
        })
        .catch(function (err) {
          //   console.log(err);
          setdebug({ ...debug, cameraError: "User has denied camera access" });
        });
    }
  }, []);

  function handleScanResult(res) {
    setisOpen(false);
    setscanresult(res);
  }

  return (
    <UI.Stack
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      maxWidth={400}
      width="100vw"
      px={"16px"}
    >
      <UI.Button
        color="primary"
        variant="contained"
        onClick={() => setisOpen(true)}
        disabled={cameraError}
        fullWidth
        size="small"
        style={{
          height: "36px",
        }}
      >
        Scan qrcode
      </UI.Button>
      <UI.Stack display={"flex"} flexDirection={"column"} width="100%">
        <UI.Text
          sx={{
            marginTop: "20px",
          }}
        >
          scanresult
        </UI.Text>
        <UI.Text variant="h6" color="primary" className="f-bold">
          {scanresult || "please run scanner"}
        </UI.Text>
        <DebugRender data={debug} />
      </UI.Stack>
      <Drawer
        open={isOpen}
        onClose={() => setisOpen(false)}
        anchor={ss ? "bottom" : "right"}
      >
        <UI.Stack p={5}>
          {isOpen && <ScanInput result={handleScanResult} />}
        </UI.Stack>
      </Drawer>
    </UI.Stack>
  );
}

function Welcome(props) {
  const ss = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [isOpen, setisOpen] = useState(true);

  return (
    <UI.Stack
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      maxWidth={400}
      width="100vw"
      px={"16px"}
    >
      <Drawer
        open={isOpen}
        onClose={() => setisOpen(false)}
        anchor={"bottom"}
        style={{
          width: "100vw",
        }}
      >
        <UI.Stack
          p={2}
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <UI.Stack
            p={2}
            style={{
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "50vh",
              maxWidth: "400px",
            }}
          >
            <UI.Text align="justify" width="100%">
              this is a tool to check your barcode scanning function.
            </UI.Text>

            <UI.Text align="justify" pt={1}>
              press "Scan qrcode" to start Scanning. you can scan any barcode or
              qrcode using this tools.
            </UI.Text>
            <UI.Text align="justify" py={1}>
              you can use your phone as scanner, and open qr code above from
              another devices. scanning qrcode above should resulting
              "https://genesha-dev.com/"
            </UI.Text>
            <UI.Button
              color="primary"
              variant="contained"
              onClick={() => setisOpen(false)}
              fullWidth
              size="small"
              style={{
                height: "36px",
              }}
            >
              start
            </UI.Button>
          </UI.Stack>
        </UI.Stack>
      </Drawer>
    </UI.Stack>
  );
}

function DebugRender({ data }) {
  return (
    <UI.Stack display={"flex"} flexDirection={"column"} width="100%" mt={2}>
      <RenderData t={"OS"} d={data.os} />
      <RenderData t={"Browser"} d={data.browser} />
      <RenderData t={"Version"} d={data.version} />
      <RenderData t={"Camera Status"} d={data.cameraOk || data.cameraError} />
      <RenderData t={"HTTPS"} d={data.HTTPS} />
    </UI.Stack>
  );
}

function ScanInput(props) {
  const [onStream, setonStream] = useState(false);
  const [onCamera, setonCamera] = useState(false);
  const [err, seterr] = useState();

  const { ref } = useZxing({
    onResult(result) {
      props.result(result.getText());
    },
    onError(err) {
      seterr("something err");
    },
  });

  function handleReload() {
    setonCamera(false);
    seterr("");

    setTimeout(() => {
      setonCamera(true);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => {
      setonStream(true);
      setonCamera(true);
    }, 500);
  }, []);

  return (
    <UI.Col spacing={2} center>
      <UI.Col width={300}>
        <video ref={ref} />
        {/* {onCamera && (
          <BarcodeScannerComponent
            width={"100%"}
            delay={1000}
            stopStream={onStream}
            // onUpdate={ScanHandle}
            onError={handleError}
            onResult={ScanHandle}
          />
        )} */}
      </UI.Col>

      <UI.Button
        variant="contained"
        fullWidth
        color="primary"
        style={{
          height: 32,
        }}
        onClick={handleReload}
      >
        Reload Camera
      </UI.Button>
      <UI.Text mt={"8px"}>{!onStream ? "camera reloading . . ." : ""}</UI.Text>
      <UI.Text mt={"8px"}>{err}</UI.Text>
    </UI.Col>
  );
}

function RenderData({ t, d }) {
  return (
    <UI.Stack
      display={"flex"}
      flexDirection={"row"}
      justifyContent="space-between"
      width={"100%"}
    >
      <UI.Text
        style={{
          minWidth: "82px",
        }}
      >
        {t}
      </UI.Text>
      <UI.Text align="right">{d}</UI.Text>
    </UI.Stack>
  );
}

function getOperatingSystem() {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "Windows OS";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "MacOS";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "UNIX OS";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "Linux OS";
  }

  return operatingSystem;
}

function getBrowser() {
  let currentBrowser = "Not known";
  if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
    currentBrowser = "Google Chrome";
  } else if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
    currentBrowser = "Mozilla Firefox";
  } else if (window.navigator.userAgent.indexOf("MSIE") !== -1) {
    currentBrowser = "Internet Exployer";
  } else if (window.navigator.userAgent.indexOf("Edge") !== -1) {
    currentBrowser = "Edge";
  } else if (window.navigator.userAgent.indexOf("Safari") !== -1) {
    currentBrowser = "Safari";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "Opera";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "YaBrowser";
  }

  return currentBrowser;
}

function getBrowserVersion() {
  return window.navigator.appVersion;
}
