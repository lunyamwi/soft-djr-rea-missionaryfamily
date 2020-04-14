import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card, Col, Row } from "antd";
import CustomForm from "../components/Form";


class About extends React.Component {
    state = {
    };


    render() {
        console.log(this.props)
        return (
            <div>
                <Card title="About Missionary Family">
                <Row gutter={16}>
                <Col span={10}>
                <img src="https://i.redd.it/w53erf362w201.jpg" width="50%" height="50%" />
                </Col>
                <Col style={{fontSize:"20px"}}>
                    <h3><strong>By God's grace Missionary Family carries out the following functions:</strong></h3>
                    <ul>
                        <li>Going out for missions together.</li>
                        <li>Performing health work.</li>
                        <li>Spreading the gospel to whoever is willing.</li>
                        <li>Carrying out open air public evangelistic meetings.</li>
                    </ul>
                    <h3><strong>Mission Statement:</strong></h3>
                    <p>Mission is our King</p>

                    <h3><strong>Vision Statement:</strong></h3>
                    <p>To spread the three angel's message to every kindred,nation and tongue.</p>

                    <h3><strong>Calling:</strong></h3>
                    <p>To spread the three angel's message to every kindred,nation and tongue.</p>
                    <p>
                    As His representatives among men, God does not choose angels who have never fallen, but human beings, men of like passions with those they seek to save. Christ took humanity that He might reach humanity. A divine-human Saviour was needed to bring salvation to the world. And to men and women has been committed the sacred trust of making known “the unsearchable riches of Christ.”—The Acts of the Apostles, 134. </p>
                    <p>Look upon the touching scene. Behold the Majesty of heaven surrounded by the twelve whom He has chosen. He is about to set them apart for their work. By these feeble agencies, through His Word and Spirit, He designs to place salvation within the reach of all.—The Acts of the Apostles, 18. </p>
                    <p>“Send men to Joppa, and call for one Simon.” Thus God gave evidence of His regard for the gospel ministry and for His organized church. The angel was not commissioned to tell Cornelius the story of the cross. A man subject, even as the centurion himself, to human frailties and temptations, was to be the one to tell him of the crucified and risen Saviour.—The Acts of the Apostles, 134. </p>
                    <p>The angel sent to Philip could himself have done the work for the Ethiopian, but this is not God's way of working. It is His plan that men are to work for their fellow men.—The Acts of the Apostles, 109. </p>
                    <p>“We have this treasure,” the apostle continued, “in earthen vessels, that the excellency of the power may be of God, and not of us.” God could have proclaimed His truth through sinless angels, but this is not His plan. He chooses human beings, men compassed with infirmity, as instruments in the working out of His designs. The priceless treasure is placed in earthen vessels. Through men His blessings are to be conveyed to the world. 
                    Through them His glory is to shine forth into the darkness of sin.
                    </p>


                </Col>
                </Row>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(About);
