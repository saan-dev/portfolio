import { Row, Col } from 'antd';
import CommunityGraph from "./CommunityGraph";
import img from "../img/math-garden-example.png"


function MathGarden() {
    return (
        <div className="work-frame">
            <Row gutter={[128, 0]}>
                <Col className="work-left" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }}>
                    <h1>MATH GARDEN</h1>
                    <p>A datamining tool for misconception elicitation </p>
                    <h1>ABSTRACT</h1>
                    <p>The purpose of this project was to develop a method for effectively recognising typical misconceptions responsible for frequent patterns of erroneous learning behaviour.
                    The developed method is evaluated in a data-mining experiment conducted over a large dataset of learners’ responses to arithmetic exercises.
                     <a className="read-more" href="http://dspace.library.uu.nl/handle/1874/380851"> Read More</a> </p>
                    <h1>TOOLS</h1>
                    <p>Python, Jupyter Notebook, Google Cloud, D3</p>
                </Col>
                <Col className="work-right graph-wrapper" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }} >
                    <CommunityGraph />
                    <h6 className="align-center graph-text"> Example: Group of erroneous patterns made by children in educational program Math Garden</h6>
                    <h6 className="align-center math-garden-text "> Example: Educational program Math Garden</h6>
                    <img className="math-garden-img " src={img} />
                    <div className="spacing-xl"></div>
                </Col>
            </Row>
        </div>
    )
}
export default MathGarden;