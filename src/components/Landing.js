import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import MathGardenImage from './Work/MathGardenImage';
import DropDoneImage from './Work/DropDoneImage';
import FlagsImage from './Work/FlagsImage';
import VoicmeImage from './Work/VoicmeImage';
import { Canvas } from 'react-three-fiber'
import React, { Suspense, useState } from "react";
import { useEffect } from 'react';


function Landing() {

    const [musicProduction, setMusicProduction] = useState(false)
    const [frontend, setFrontend] = useState(false)
    const [datascience, setDatascience] = useState(false)

    const handleMusicProduction = (e) => {
        e.preventDefault();
        setMusicProduction(!musicProduction)
        setFrontend(false)
        setDatascience(false)
    }
    const handleFrontend = (e) => {
        e.preventDefault();
        setFrontend(!frontend)
        setMusicProduction(false)
        setDatascience(false)
    }
    const handleDatascience = (e) => {
        e.preventDefault();
        setDatascience(!datascience)
        setMusicProduction(false)
        setFrontend(false)
    }

    function InfoBlockText() {
        if (musicProduction) {
            return (
                <div className="info-block-text spacing"><p> I create <a className="info-link" href="https://sansouni.bandcamp.com/">music</a> and do some <a className="info-link" href="https://vimeo.com/519896017">soundesign</a>. Sometimes I also design<a className="info-link" href="flags"> covers and animations</a>. I've been producing music for over 10+ years</p></div>
            );
        }
        if (frontend) {
            return (
                <div className="info-block-text spacing"> <p>Developing with the JS ecosystem since 2016. I use the React + Firebase stack the most. <a className="info-link" href="/voicme">For example </a>.</p> </div>
            );
        }
        if (datascience) {
            return (
                <div className="info-block-text spacing"> <p>Developing with the Python ecosystem since 2018. Check out this <a className="info-link" href="/mathgarden"> research project</a>.</p></div>
            );
        }
        return (
            <div className="info-block-text"> </div>
        );
    }


    return (
        <div className="header frame" >
            <Row>
                <Col offset="2" span="20" lg={{ offset: 8, span: 8 }}>
                    Hi 👋, I'm Saan Rashid, a  <a href="#" onClick={handleMusicProduction} >music producer {musicProduction ? <UpCircleOutlined /> : <DownCircleOutlined />}</a>
                    , <a href="#" onClick={handleFrontend}>frontend dev {frontend ? <UpCircleOutlined /> : <DownCircleOutlined />}</a>
                    {' '}and <a href="#" onClick={handleDatascience}>applied datascientist {datascience ? <UpCircleOutlined /> : <DownCircleOutlined />}</a>.

                    <InfoBlockText />
                     Check out what keeps me busy.
              </Col>

                <Col offset="2" span="20" lg={{ offset: 8, span: 8 }}>

                    <Canvas
                        camera={[45, window.innerWidth / window.innerHeight, 0.1, 100]}

                    >
                        <Suspense fallback={null}>
                            <MathGardenImage onClick={() => window.appHistory.push("/mathgarden")} />
                        </Suspense>
                    </Canvas>
                </Col>


                <Col offset="2" span="20" lg={{ offset: 8, span: 8 }}>
                    <Canvas
                        camera={[45, window.innerWidth / window.innerHeight, 0.1, 100]}

                    >
                        <Suspense fallback={null}>
                            <DropDoneImage onClick={() => window.appHistory.push("/dropdone")} />
                        </Suspense>
                    </Canvas>
                </Col>
                <Col offset="2" span="20" lg={{ offset: 8, span: 8 }}>
                    <Canvas
                        camera={[45, window.innerWidth / window.innerHeight, 0.1, 100]}

                    >
                        <Suspense fallback={null}>
                            <FlagsImage onClick={() => window.appHistory.push("/flags")} />
                        </Suspense>
                    </Canvas>
                </Col>
                <Col offset="2" span="20" lg={{ offset: 8, span: 8 }}>
                    <Canvas
                        camera={[45, window.innerWidth / window.innerHeight, 0.1, 100]}

                    >
                        <Suspense fallback={null}>
                            <VoicmeImage onClick={() => window.appHistory.push("/voicme")} />
                        </Suspense>
                    </Canvas>
                </Col>

            </Row>
        </div >


    );
}

export default Landing;
