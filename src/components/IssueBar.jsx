import { Col, Row } from "react-bootstrap";

const IssueBar =({totalCount, newCount, progressCount,completedCount})=>{
    return(
        <div>IssueBar
            <Row>
                <Col>
                <span className="text-info">Total:</span>{totalCount}
                </Col>
                <Col>
                <span className="text-primary">New:</span>{newCount}
                </Col>
                <Col>
                <span className="text-warning">Progress:</span>{progressCount}
                </Col>
                <Col>
                <span className="text-success">Completed:</span>{completedCount}
                </Col>
            </Row>
        </div>
    )
}
export default IssueBar;