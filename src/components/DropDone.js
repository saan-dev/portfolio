import React from "react";
import { Row, Col } from 'antd';
function DropDone() {

    return (
        <div className="work-frame">
            <Row gutter={[128, 0]}>
                <Col className="work-left" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }}>
                    <h1>DROPDONE</h1>
                    <p>A 2.5d parallax photo animation tool</p>
                    <h1>ABSTRACT</h1>
                    <p>
                        The purpose of dropdone was to create a simple UI for the creation of parallax effect on still images with ML. To validate the use case a desktop app (prototype) was built. The ML code was based on Shih, M. L., Su, S. Y., Kopf, J., & Huang, J. B. (2020). 3d photography using context-aware layered depth inpainting.

                        <a className="read-more" href="https://shihmengli.github.io/3D-Photo-Inpainting/"> Read More</a> </p>
                    <h1>TOOLS</h1>
                    <p>React, Electron, Python, Google Cloud</p>
                </Col>
                <Col className="work-right dropdone-right" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }} >
                    <div className="spacing"></div>
                    <iframe loading="lazy" src="https://player.vimeo.com/video/531219078?portrait=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="dropdone.space"></iframe>
                </Col>
            </Row>
        </div>
    )
}
export default DropDone;