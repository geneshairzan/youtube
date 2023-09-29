import { Stack, Typography, Box, Button, Grid } from "@mui/material";

import React from "react";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import UI from "@component/gip-ui";

const datas = [
  {
    year: "2023",
    title: "Compound Coffe Plantion",
    subtitle: "Tree adoption program",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2023",
    title: "KDigital",
    subtitle: "Metaverse 3D avatar configurator",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2023",
    title: "MyGank",
    subtitle: "Community Social Media",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2022",
    title: "PT. Pembangunan Perumahan (PTPP)",
    subtitle: "Legal Case Management System",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    maincon: "ara",
    link: "#",
  },
  {
    year: "2022",
    title: "ConTool",
    subtitle: "Customer Experience Map",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2022",
    title: "FamilyTree ",
    subtitle: "Family Tree",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2022",
    title: "Anagatra Singapore",
    subtitle: "Server Maintenance and Configuration",
    sector: "Private",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed (yes)",
    link: "#",
  },
  {
    year: "2022",
    title: "Kementerian Perdagangan Republik Indonesia",
    subtitle: "SimEI. Simulasi Export Import",
    sector: "Goverment. ",
    stacks: "React, Laravel, MySql",
    modules: "undisclosed",
    link: "#",
  },
  {
    year: "2022",
    title: "Badan Keamanan Laut Indonesia (BAKAMLA)",
    subtitle: "HCDP. Human Capital Development Program",
    sector: "Goverment. Military.",
    stacks: "React, Laravel, MySql, Nginx",
    modules: "undisclosed",
    maincon: "ara",
    link: "#",
  },
  {
    year: "2022",
    title: "Tespersonality",
    subtitle: "Corporate Employee Assestment Tools",
    sector: "Private",
    stacks: "Laravel, React, MySql, Nginx",
    modules: "User management & Assestment Tolls",
    link: "https://asm.tespersonaliti.com/",
  },
  {
    year: "2022",
    title: "BPOT",
    subtitle: "Bumiputra Online Trading",
    sector: "Goverment. Finance",
    stacks: "Laravel, React, MySql, Nginx, AWS",
    modules: "Landing page, News Mng., Stock Screener, Education Mng., Research Mng. ",
    maincon: "ara",
    link: "https://bpot.co.id",
  },
  ,
  {
    year: "2022",
    title: "Helloha v2.0",
    subtitle: "Tourism Experience booking system",
    sector: "Private Sector. Tourism.",
    stacks: "Laravel, MySql, Nginx",
    modules: "Register, Order, Payment (ipaymu), Tracking, Reporting",
    link: "https://fev3.helloha.app/",
  },
  {
    year: "2021",
    title: "Badan Keamanan Laut Indonesia (BAKAMLA)",
    subtitle: "HRIS. Human Resource Integrated System",
    sector: "Goverment. Military.",
    stacks: "Laravel, MySql, Nginx",
    modules: "undisclosed",
    maincon: "ara",
    link: "#",
  },
  {
    year: "2021",
    title: "Amati Indonesia",
    subtitle: "Voluntourism management system",
    sector: "Private Sector. Tourism.",
    stacks: "Laravel, MySql, Nginx",
    modules: "Register, Volunturism Mng. Ecotourims Mng., Tracking, Reporting",
    link: "https://voluntourism.amati.id/",
  },
  ,
  {
    year: "2021",
    title: "Shipmybox Singapore",
    subtitle: "Logistic management system",
    sector: "Private Sector. Internation Logistics.",
    stacks: "React, Laravel, MySql, Nginx",
    modules: "Register, Order, Payment (Stripe), Tracking, Reporting, JNE Integration",
    link: "https://shipmybox.sg/",
  },
  // {
  //   year: "2021",
  //   title: "Helloha",
  //   subtitle: "Tourism Experience booking system",
  //   sector: "Private Sector. Tourism.",
  //   stacks: "Laravel, MySql, Nginx",
  //   modules: "Register, Order, Payment (ipaymu), Tracking, Reporting",
  //   link: "https://helloha.app/",
  // },
  {
    year: "2021",
    title: "Maju Bersama Logam",
    subtitle: "MBPOS. Maju Bersama Point of Sales",
    sector: "Private Sector. ",
    stacks: "Ract, Laravel, MySql, Nginx",
    modules: "Sales Management, Purchase Mng., Cash Mng., Employee Mng.  Reporting",
    maincon: "ara",
    link: "#",
  },
];

export default function CRecentProejct({ isPrinting = false }) {
  return (
    <Stack width="100%" spacing={1}>
      <UI.Text variant="body1" color="cv.red" bold pt={2}>
        RECENT PROJECT
      </UI.Text>
      {datas
        // .filter((d) => d.maincon == "ara")
        .map((d) => (
          <Card
            year={d.year}
            title={d.title}
            subtitle={d.subtitle}
            sector={d.sector}
            stacks={d.stacks}
            modules={d.modules}
            link={d.links}
          />
        ))}
    </Stack>
  );
}

function Card(props) {
  return (
    <UI.Row spacing={1}>
      <UI.Col center backgroundColor="cv.blue">
        <Typography
          variant="subtitle1"
          textAlign="left"
          color={"white.main"}
          component="span"
          sx={{
            px: 1,
          }}
        >
          {props.year}
        </Typography>
      </UI.Col>
      <UI.Col>
        <UI.Text variant="body2">{props.title}</UI.Text>
        <UI.Text variant="caption" mt={"-4px"}>
          {props.subtitle}
        </UI.Text>
      </UI.Col>
    </UI.Row>
  );
}
