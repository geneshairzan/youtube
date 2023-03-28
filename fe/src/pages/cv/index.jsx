import React, { useState, useEffect } from "react";

import UI from "@component/gip-ui";
import Recent from "./recent";
import Printer, { print, PrintContainer } from "@component/pdfp";

export default function App(props) {
  const [isprinted, setisprinted] = React.useState(true);
  const [isLoading, setisLoading] = useState(false);

  React.useEffect(() => {
    if (isprinted) {
      setisLoading(true);
      window.scrollTo(0, 0);
      print({
        title: "MYLEAD Test Result",
      }).then((e) => {
        setisLoading(false);
        // setmobileDisplay("none");
      });
    }
  }, [isprinted]);

  return (
    <UI.Col center bgcolor="#1e1e1e" p={5}>
      <Printer>
        <PrintContainer>
          <UI.Col p={3} spacing={2}>
            <Top />
            <UI.Row spacing={2}>
              <Left />
              <Right />
            </UI.Row>
          </UI.Col>
        </PrintContainer>
      </Printer>
    </UI.Col>
  );
}

function Top(params) {
  return (
    <UI.Row spacing={2} mb={3}>
      <UI.Col center>
        <UI.Avatar src="/img/ppsq.png" w={220} />
      </UI.Col>
      <UI.Col flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
        <UI.Text variant="h3" bold color="cv.blue">
          ESHA
        </UI.Text>
        <UI.Text variant="body1" bold>
          Genesha Iran Pratama S.Kom, M.M.
        </UI.Text>
        <UI.Text variant="body1" color="cv.red" bold>
          FULLSTACK DEVELOPER
        </UI.Text>

        <UI.Text variant="body2" pt={2} align="right">
          genesha.irzan@gmail.com <br />
          +62 811 995 1112 <br />
          https://genesha.dev <br />
          Jakarta | Bekasi | Bali, Indonesia
        </UI.Text>
      </UI.Col>
    </UI.Row>
  );
}

function Left(params) {
  return (
    <UI.Col width="50%">
      <UI.Text variant="body1" color="cv.red" bold>
        WORKING EXPERIENCE
      </UI.Text>
      <UI.Text variant="body2">
        2010. Apprenticeship Program in PT. Toyota Astra Motor <br />
        2011. Thesis. Analysis System and Database Design of Helpdesk Management System Applying With Service Level
        Agreement (SLA) at PT. Toyota Astra Motor
        <br />
        2011 – 2012. PT. IBM Indonesia. GTS – TSS – I/T Specialist
        <br /> 2012 – 2013. PT. IBM Indonesia. GTS – TSS – Sales Specialist
        <br /> 2013 – Present. Alpha Dsign. Founder.
        {/* <br /> 2020 – Present. GeneshaDev. Founder. */}
        <br /> 2020 – Present. PT Ara Sukses Sejahter. Head of Engineering.
      </UI.Text>

      <UI.Text variant="body1" color="cv.red" bold pt={2}>
        FORMAL EDUCATION
      </UI.Text>
      <UI.Text variant="body2">
        1995 – 1996. Siemens Elementary School, Jakarta <br />
        1996 – 2001. Angkasa IX Halim P. Elementary school, Jakarta <br />
        2001 – 2004. 81 Junior High School , Jakarta <br />
        2004 – 2007. 48 Senior High School, Jakarta <br />
        2007 – 2011. Bina Nusantara University, Jakarta <br />
        Major in Information Technology, Jakarta <br />
        2013 – 2015. Bina Nusantara Business School, Jakarta
        <br /> Major in Master Management – Creative Marketing
      </UI.Text>

      <UI.Text variant="body1" color="cv.red" bold pt={2}>
        NON FORMAL EDUCATION
      </UI.Text>
      <UI.Text variant="body2">
        2008. SAP01 – SAP Fundamentals (Certificate) <br />
        2011. TOEFL Preparation (Certificate) <br />
        2011. Cisco Certified Network Associate (CCNA) <br />
        2012. IT Infrastucture Library Foundation (ITIL) V3 (Certificate) <br />
        2012. IBM ASEAN TSS Sales Training <br />
        2012. IBM Sales Presentation Program (Certificate)
      </UI.Text>

      <UI.Text variant="body1" color="cv.red" bold pt={2}>
        SOCIAL
      </UI.Text>
      <UI.Text variant="body2">
        https://github.com/geneshairzan <br />
        https://www.linkedin.com/in/geneshairzan/ <br />
      </UI.Text>
    </UI.Col>
  );
}

function Right(params) {
  return (
    <UI.Col width="50%">
      <UI.Text variant="body1" color="cv.red" bold>
        AREA OF EXPERTISE
      </UI.Text>
      <UI.Text variant="body2">React | Laravel | MUI</UI.Text>

      <UI.Text variant="body1" color="cv.red" bold pt={2}>
        SKILLSET & TECHNOLOGY
      </UI.Text>
      <UI.Text variant="body2">
        HTML | CSS | PHP | Javascript | C# | C++ | ThreeJS | React Fiber | Node | Express | Bootstrap | Msysl | Mongo |
        AWS | Linux | Nginx |
      </UI.Text>
      <Recent />
    </UI.Col>
  );
}
