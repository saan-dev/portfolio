import React from "react";
import { Row, Col } from 'antd';
function Voicme() {
    return (
        <div className="work-frame">
            <Row gutter={[128, 0]}>
                <Col className="work-left" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }}>
                    <h1>VOICME</h1>
                    <p>An audio platform that allows you to turn web articles into natural sounding speech</p>
                    <h1>ABSTRACT</h1>
                    <p>
                        The purpose of voicme was to easily create audio from web articles . The possibilities of voice recording, voice actors and TTS techniques were explored. Design by Sander Hagelaar.
                        <a className="read-more" href="https://voicme.com"> Read More</a> </p>
                    <h1>TOOLS</h1>
                    <p>React, Firebase, NodeJS</p>
                </Col>
                <Col className="work-right dropdone-right" xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 12, offset: 0 }} >
                    <div className="spacing"></div>
                    <iframe loading="lazy" src="https://player.vimeo.com/video/548412887?portrait=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="dropdone.space"></iframe>
                </Col>
            </Row>
        </div>
    )
}
export default Voicme;