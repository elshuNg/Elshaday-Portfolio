import React, { useRef } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReactPlayer from 'react-player';

const style = {
  top: "50%",
  left: "50%",
  bgcolor: "rgba(0, 0, 0, 0.8)", // Adjusted alpha for transparency
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
  position: "relative",
  width: "80%",
  maxWidth: 800,
};

export default function ({ open, handleOpen, handleClose, props }) {
  const playerRef = useRef(null);

  const handlePlayFullscreen = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().play(); // Start playback

      // Request fullscreen on the player container
      const playerContainer = playerRef.current.wrapper; // Access the player wrapper

      if (playerContainer) {
        if (playerContainer.requestFullscreen) {
          playerContainer.requestFullscreen();
        } else if (playerContainer.mozRequestFullScreen) { // Firefox
          playerContainer.mozRequestFullScreen();
        } else if (playerContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          playerContainer.webkitRequestFullscreen();
        } else if (playerContainer.msRequestFullscreen) { // IE/Edge
          playerContainer.msRequestFullscreen();
        }
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ ...style, maxHeight: "93vh", overflowY: "auto" }}
          className="projectDetailviwe"
        >
          <IconButton
            onClick={handleClose}
            size="large"
            aria-label="close"
            style={{
              color: "white",
              position: "absolute",
              top: "13px",
              right: "13px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="detailContainer">
            <div className="project_img ColumncontainerStyle">
              <Card
                className="project-card-view"
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "flex",
                  flexDirection: "column", // Set column layout
                  alignItems: "center", // Center items horizontally
                }}
              >
                {props.isVideo ? (
                  <>
                    <ReactPlayer
                      ref={playerRef}
                      url={props.videoLink}
                      width="100%"
                      height="150px" // Fixed height for the video
                      controls
                    />
                    <Button
                      onClick={handlePlayFullscreen}
                      variant="primary" // Same style as Live button
                      style={{
                        marginTop: "10px", // Add margin to separate from video
                        maxWidth: "300px",
                        width: "100%",
                      }}
                    >
                      <PlayArrowIcon /> &nbsp; Play Fullscreen
                    </Button>
                  </>
                ) : (
                  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                )}
              </Card>
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{
                    maxWidth: "300px",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <PlayArrowIcon /> &nbsp; Live
                  </div>
                </Button>
              )}
            </div>
            <Card.Body style={{ marginLeft: "13px" }}>
              <Card.Title style={{ paddingTop: "3px" }}>{props.title}</Card.Title>
              <Card.Text>
                <h6 style={{ fontWeight: "bold" }} className="purple">{"Overview :"}</h6>
                <p style={{ marginLeft: "13px" }}>{props.Overview}</p>
                <h6 style={{ fontWeight: "bold" }} className="purple">{"Features :"}</h6>
                <p style={{ marginLeft: "13px" }}>{props.Features}</p>
                <h6 style={{ fontWeight: "bold" }} className="purple">{"Tech Stack:"}</h6>
                <p style={{ marginLeft: "13px" }}>{props.Tech_Stack}</p>
              </Card.Text>
            </Card.Body>
          </div>
        </Box>
      </Modal>
    </div>
  );
}