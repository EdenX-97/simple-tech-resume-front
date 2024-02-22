'use client'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Loading from './loading';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const zoomIn = () => {
    if (scale < 1.5) {
      setScale(scale + 0.1);
    }
  };

  const zoomOut = () => {
    if (scale > 0.7) {
      setScale(scale - 0.1);
    }
  };

  return (
    <div className="flex flex-col mb-[2vh]">
      {/* <div className="join justify-center mb-[2vh]">
        <button className="join-item btn btn-outline btn-sm" onClick={zoomIn}>Zoom In</button>
        <button className="join-item btn btn-outline btn-sm" onClick={zoomOut}>Zoom Out</button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn join-item btn-outline btn-primary btn-sm">Download</div>
          <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-42">
            <li><a>Download <b>PDF</b></a></li>
            <li><a>Downolad <b>LATEX</b></a></li>
            <li><a>Downolad <b>WORD</b></a></li>
          </ul>
        </div>
      </div> */}
      <div className="flex justify-center">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loading />}
        >
          <Page pageNumber={pageNumber} scale={scale} width={700} />
        </Document>
      </div>
      <div className="join justify-center mt-[2vh]">
        <button className="join-item btn btn-sm" onClick={goToPrevPage} disabled={pageNumber <= 1}>«</button>
        <button className="join-item btn btn-sm">{pageNumber}</button>
        <button className="join-item btn btn-sm" onClick={goToNextPage} disabled={pageNumber >= numPages}>»</button>
      </div>
    </div>
  );
}

export default PdfViewer;