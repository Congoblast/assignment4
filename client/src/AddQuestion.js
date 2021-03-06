import React, { Component } from "react"
import api from "./datas"
import {Container,Row,Col,Button} from "react-bootstrap";
import "./styles.css";



class AddQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            //rating: '',
            //time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    //handleChangeInputQuestion = async event => {
      //  const question = event.target.value 
        //this.setState({ question })
    //}

    handleIncludeQuestion = async () => {
        const { name, question } = this.state
        const send = { name, question}

        await api.addQuestion(send).then(res => {
            window.alert("Your Question has been Added")
            
            //this.setState({
              //  name: '',
                //question: '',
               
            //})
        })
    }

    render() {
        const {name} = this.state
        return (
            <Container>
                <Row>          
                    <Col> 
                <title>Create Movie</title>

                <h2 className="text-center QuestionHeader">Question:</h2>
                </Col>
                </Row>
                <Row>    
                    <Col className="text-center txtbox">    
                            <textarea style={{width:"470px", height:"170px"}} type="text" value={name} onChange={this.handleChangeInputName}
                />
             

                <Button className="text-center" onClick={this.handleIncludeQuestion}>Add Question</Button>
                </Col>
             </Row>

            </Container>
        )
    }
}

export default AddQuestion;