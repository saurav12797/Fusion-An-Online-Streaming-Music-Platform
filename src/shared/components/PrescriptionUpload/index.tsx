import { Button } from "antd";
import React, { FC, Fragment, useRef } from "react";
import "./prescriptionUpload.scss";

interface PrescriptionUploadProps {
//   onUpload: (file: File) => void;
}

const PrescriptionUpload: FC<PrescriptionUploadProps> = (props) => {
  const {  } = props;

 
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    if (inputRef && inputRef?.current) {
      inputRef.current?.click();
    }
  };

  const handleFile = (event: any) => {
    const image = event.target.files[0];
    // onUpload(image);
  };

  return (
    <Fragment>
      <Button className="prescription-upload" type="ghost" onClick={handleUploadImage}>Upload Prescription</Button>
      <input type="file" ref={inputRef} onChange={handleFile} hidden/>
    </Fragment>
  );
};

export default PrescriptionUpload;
