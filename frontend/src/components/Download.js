import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import Button from 'react-bootstrap/Button';
import Rendering from './Rendering';

export default () => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <Button onClick={downloadScreenshot}>Download</Button>
      <div
        ref={ref}
        style={{
          padding: "0px"
        }}
      >
          <Rendering/>
      </div>
    </div>
  );
};