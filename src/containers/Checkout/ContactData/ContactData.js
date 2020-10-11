import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: "",
      street: "",
      zip: "",
      country: "",
      email: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    //6
    const formElements = (
      <div className={classes.Input}>
        <input
          type="text"
          className={classes.InputElement}
          placeholder="Enter Your Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          className={classes.InputElement}
          placeholder="Enter Street"
          value={this.state.street}
          onChange={(e) => this.setState({ street: e.target.value })}
        />
        <input
          type="text"
          className={classes.InputElement}
          placeholder="Enter ZIP code"
          value={this.state.zip}
          onChange={(e) => this.setState({ zip: e.target.value })}
        />
        <input
          type="text"
          className={classes.InputElement}
          placeholder="Enter Your Country"
          value={this.state.country}
          onChange={(e) => this.setState({ country: e.target.value })}
        />
        <input
          type="text"
          className={classes.InputElement}
          placeholder="Enter Your Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
      </div>
    );
    let form = (
      <form>
        {formElements}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
