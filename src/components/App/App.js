import React, { Component } from "react";
import "./App.css";
import { getUrls, postUrls, deleteUrls } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  componentDidMount() {
    try {
      getUrls().then((data) => {
        console.log(data);
        this.setState({ urls: data.urls });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }

  addUrl = async (newUrl) => {
    try {
      await postUrls(newUrl);

      await getUrls().then((data) => {
        this.setState({ urls: data.urls });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  deleteUrl = async (id) => {
    try {
      await deleteUrls(id);

      await getUrls().then((data) => {
        this.setState({ urls: data.urls });
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1 data-cy="app-heading">URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>

        <UrlContainer urls={this.state.urls} deleteUrl={this.deleteUrl} />
      </main>
    );
  }
}

export default App;
