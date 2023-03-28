import React from "react";
import html2canvas from "html2canvas";
import JSPDF from "jspdf";
// import toPx from "unit-to-px";
import html2pdf from "html2pdf.js";

export const print2 = async ({ title = "Page and Pull Report", orientation = "p" }) => {
  let element = document.getElementsByClassName("toPrint");
  var opt = {
    margin: [0.5, 0.2],
    filename: title || "report.pdf",
    image: { type: "png", quality: 0.98 },
    jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    // margin: [0.5, 1],
    // pagebreak: { mode: "avoid-all", before: ".pagebreaker" },
    // html2canvas: { scale: 2 },
    // jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf()
    .from(element)
    .set(opt)
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      // let totalPages = pdf.internal.getNumberOfPages();
      // for (let i = 1; i <= totalPages; i++) {
      //   pdf.setPage(i);
      //   pdf.setFontSize(8);
      //   pdf.setTextColor(150);
      //   pdf.text(
      //     "Page " + i + " of " + totalPages,
      //     pdf.internal.pageSize.getWidth() - 1.2,
      //     pdf.internal.pageSize.getHeight() - 0.2
      //   );
      // }
      // onComplete(true);
    })
    .save();
};

export const print = async ({ title = "Page and Pull Report", orientation = "p" }) => {
  let images = [];
  let list = document.getElementsByClassName("toPrint");
  for (var i = 0; i < list.length; i++) {
    const promise = new Promise((resolve) =>
      html2canvas(list[i], {
        scale: 2,
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        resolve(canvas);
      })
    );

    await Promise.all([promise]).then((canvas) => {
      const image = canvas[0].toDataURL("image/jpeg", 2);
      images.push(image);
    });
  }

  images.length == list.length && download(images, title, orientation);
};

const download = (images, title, orientation) => {
  const pdf = new JSPDF({
    orientation: orientation, // landscape
    unit: "mm",
    format: [297, 210],
  });
  // const pages = document.getElementById("pages").offsetHeight / toPx("297mm");
  const qty = images.length;

  for (let i = 0; i < qty; i++) {
    i > 0 && i < qty && pdf.addPage();
    if (orientation == "p") pdf.addImage(images[i], "jpeg", 0, 0, (793 / 4) * 1.06, (1122 / 4) * 1.06);
    else pdf.addImage(images[i], "jpeg", 0, 0, (1122 / 4) * 1.06, (793 / 4) * 1.06);
  }
  pdf.save(`${title}.pdf`);
};

export default ({ children }) => {
  return <div id="pages">{children}</div>;
};

export function PrintContainer(props) {
  return (
    <div
      className="toPrint"
      style={{
        // width: "210mm",
        // height: "297mm",
        width: "793px",
        height: "1122px",
        backgroundColor: "white",
      }}
    >
      {props.children}
    </div>
  );
}

export function PrintContainerLS(props) {
  return (
    <div
      className="toPrint"
      style={{
        height: "210mm",
        width: "297mm",
        backgroundColor: "white",
      }}
    >
      {props.children}
    </div>
  );
}
