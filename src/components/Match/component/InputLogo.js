import React, { useState, useEffect } from "react";
import ImageUploader from "react-images-upload";
import { Api } from "../../../services/api";
import Spinner from "../../Spinner";

export default function InputLogo({ name, idx }) {
  const [pictures, setPictures] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    postLogo(pictures[0], name);
  }, [pictures]);

  function postLogo(img, name) {
    if (idx || idx === 0 || pictures.length === 0) {
      return null;
    } else {
      setUpdated(true);
      Api.setComandLogo(img, name).then(res => {
        setUpdated(false);
      });
    }
  }

  function onHandleChange(picture) {
    setPictures(picture);
  }
  return (
    <React.Fragment>
      {!updated ? (
        <div
          className="match__logo"
          style={{
            background: `url(https://bet2u.eu/dynamic/logo/${name}.png)`
          }}
        ></div>
      ) : (
        <spinner />
      )}
      {idx || idx === 0 ? (
        ""
      ) : (
        <ImageUploader
          withIcon={false}
          buttonText="Choose images"
          withPreview={false}
          onChange={onHandleChange}
          singleImage={true}
          imgExtension={[".png"]}
        />
      )}
    </React.Fragment>
  );
}
