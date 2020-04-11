import React from "react";
import { connect } from "react-redux";
import { getMpesa } from "../store/actions/mpesaActions";
import { Form, Button, Alert } from 'react-bootstrap';


class Mpesa extends React.PureComponent {
    state = {
        phoneNumber: '',
        amount: 0
    };


    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

    }
    handleSumbit = (e) => {
        e.preventDefault();
        const data = {
            mobile_no: this.state.phoneNumber,
            amount: this.state.amount
        }
        this.props.getMpesa(data)
    }
    render() {
        // console.log(this.props)
        const { errors } = this.props

        return (
            <div>

                <Form onSubmit={this.handleSumbit}>
                    {/* <Alert>{errors.data}</Alert> */}
                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number in the format +254..." name="phoneNumber" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount you desire to contribute" name="amount" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Support
                </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.mpesa.data,
        errors: state.mpesa.errors,
        isLoading: state.mpesa.isLoading
    };
};


export default connect(
    mapStateToProps, { getMpesa }
)(Mpesa);
