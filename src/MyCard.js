import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle thumbnail border-danger"
          src={details.picture?.large}
          alt="profile"
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <h5>
            <FaMapMarkedAlt />
            {details.location?.city}
          </h5>
        </CardText>
        <CardText>
          <h5>
            <FaPhone />
            {details.phone}
          </h5>
        </CardText>
        <CardText>
          <h5>
            <FaEnvelope />
            {details.email}
          </h5>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
