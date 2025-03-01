import React, { Component } from "react";

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: "",
      urlToShorten: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title,
    };
    this.props.addUrl(newUrl);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", urlToShorten: "" });
  };

  render() {
    return (
      <form data-cy="url-form">
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleNameChange(e)}
          data-cy="url-title-input"
        />

        <input
          type="text"
          placeholder="URL to Shorten..."
          name="urlToShorten"
          value={this.state.urlToShorten}
          onChange={(e) => this.handleNameChange(e)}
          data-cy="url-short-input"
        />

        <button
          onClick={(e) => this.handleSubmit(e)}
          data-cy="shorten-please-button"
        >
          Shorten Please!
        </button>
      </form>
    );
  }
}

export default UrlForm;
