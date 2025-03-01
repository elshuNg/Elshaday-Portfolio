import React ,{useState}from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectDetail from "./ProjectDetailmodal";

function ProjectCards(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card className="project-card-view">
      <Card.Img className="Img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && ( */}
          <Button
            variant="primary"
            // href={props.demoLink}
            style={{ marginLeft: "10px"}}
            onClick={handleOpen}
          >
            <div style={{ display: "flex"}}>
            <BsBoxArrowUpRight /> &nbsp;
            {"Preview"}
            </div>
            
          </Button>
          
       {/* )}  */}
        <ProjectDetail open={open} handleClose={handleClose} handleOpen={handleOpen} props={props} />
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
