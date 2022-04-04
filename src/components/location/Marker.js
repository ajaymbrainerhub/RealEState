import React from "react";
//css
import "./marker.css";
//dependencies
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";
//icon
import { ReactComponent as Location } from "../../assets/icons/location.svg";


const Marker = ({ image, openInfoWindow, show, data, selectedMap }) => {
  const Input = styled("input")({
    display: "none",
  });

  let history = useHistory();

  return (
    <div>
      <div
        onClick={openInfoWindow}
        className="pin bounce"
        style={{
          backgroundColor: "red",
          cursor: "pointer",
          width: 30,
          height: 30,
          position: "absolute",
          padding: 2,
        }}
        title="test"
      >
        <span
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 26,
            width: 26,
            display: "block",
            borderRadius: 50,
            overflow: "hidden",
            transform: "rotate(45deg)",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#fff",
          }}
        ></span>
      </div>

      <div className="pulse" />
      {/* {console.log("data", data)} */}
      {show && selectedMap.id === data.id ? (
        <div
          style={{
            width: 195,
          }}
        >
          <div className="product-preview col product-preview--map">
            <div className="product-preview-status">
              <Chip label="Project Tag" />
              <Input id="icon-button-file" type="button" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                className="likeBtn"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </div>
            <CloseIcon onClick={openInfoWindow} />
            <img className="img" src={data.image} alt="" />

            <div className="productDetails">
              <div className="productDetailsHead flex">
                <div className="price">{data.price}</div>
              </div>
              <div className="productTitle">{data.name}</div>
              <div className="location">
                <Location />
                <span>{data.location}</span>
              </div>
              <div className="footer flex">
                <div className="distance">{data.distance}</div>

                 <div
                  className="type"
                  onClick={() => {
                    if (data.type === "company") {
                      history.push("/company", {
                        state: { isBookingApp: true },
                      });
                    } else if (data.type === "mall") {
                    } else if (data.type === "shop") {
                    } else {
                      history.push("/categorydetails", {
                        state: { categoryDetails: data },
                      });
                    }
                  }}
                >
                  {data.type}
                </div>
              </div>
              <div className="type">Cupon:{data.cupon}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Marker;
