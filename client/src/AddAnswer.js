import React, { Component } from 'react'
import api from './datas'
import "./styles.css";
import {Container,Row,Col,Button} from "react-bootstrap";


class AddAnswer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            //name:"",
            //question: '',
        }
    }

    //handleChangeInputName = async event => {
      //  const name = event.target.value
        //this.setState({ name })
    //}

    handleChangeInputQuestion = async event => {
        const question = event.target.value
        this.setState({ question })
    }

   // handleIncludeQuestion = async () => {
     //   const { question } = this.state
       // const send = { question}

        //await api.addQuestion(send).then(res => {
            //window.alert(`Movie inserted successfully`)
          //  window.location.reload();

            //this.setState({
              //  question: '',
            //})
        //})
   // }
    handleUpdateQuestion = async () => {
        const { id, name, question} = this.state
        const send = {name, question }

        await api.updateQuestionById(id, send).then(res => {
           // window.alert(`Movie updated successfully`)
           window.location.reload();
 
          // this.setState({
                //name: "",
                //question: '',
               
            //})
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const question = await api.getQuestionById(id)

        this.setState({
            question:question.data.data.question,
            name: question.data.data.name,
        })
    }

    render() {
        const { name, question } = this.state
        return (
            <Container>
            <Row>
                <Col>
                <title className="text-center">Create Movie</title>
                <h2 className="text-center QuestionHeader">Question </h2>
                <hr></hr>
                </Col>
                </Row>

                <Col>
                <p>
                {name}
                </p>
                <hr></hr>
                </Col>
                <Col>
                <Row>
                <h3>Answers:</h3>

                </Row>
                </Col>
                <hr></hr>
                {question}
                <hr></hr>
                <br></br>
                <Col>
                <Row>
                
                <textarea style={{width:"370px",height:"370px"}} onChange={this.handleChangeInputQuestion} />
</Row>
                </Col>
               
                <Button onClick={this.handleUpdateQuestion}>Add Answer</Button>
                <br></br>


            </Container>
        )
    }
}

export default AddAnswer;
