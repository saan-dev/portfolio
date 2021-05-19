import { Row, Col } from 'antd';
import animated from "../img/flags_animated.gif"

function Flags() {

    return (
        <div className="work-frame">
            <Row gutter={[128, 0]}>
                <Col className="work-left" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }}>
                    <h1>FLAGS</h1>
                    <p> 3d animation and artwork</p>
                    <h1>ABSTRACT</h1>
                    <p>The purpose of this project was to create artwork and animations for the track <a href="">Sansouni - Flags</a>. The coloring is done in After Effects, the simulation in Blender and the coverwork in Photoshop.  The animations will be part of an audiovisual liveset.
                 <a className="read-more" href="https://sansouni.bandcamp.com/track/flags"> Show Artwork</a> </p>
                    <h1>TOOLS</h1>
                    <p>Blender, Adobe After Effects, Photoshop</p>
                </Col>
                <Col style={{ textAlign: 'center' }} className="work-right" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }} >
                    <h6 className="align-center spacing"> Example: Animated flag in Blender</h6>
                    <img className="animated-gif" src={animated} />
                    <div className="spacing-xl"></div>
                </Col>
            </Row>
        </div >
    )
}
export default Flags;