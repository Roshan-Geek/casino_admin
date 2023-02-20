import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const NextTooltip = ({ children, ...props }) => {
    const renderTooltip = (data) => <Tooltip {...data}>{props.title}</Tooltip>;

    return (
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
            {children}
        </OverlayTrigger>
    );
};

export default NextTooltip;
