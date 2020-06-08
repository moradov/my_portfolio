import React, { Component } from 'react';
import axios from 'axios';

import PortHund from './PortHund/PortHund';
import Spinner from '../Spinner/Spinner';
import PortProjects from './PortProjects/PortProjects';
import Error from '../Error/Erorr';

class Portfolio extends Component {
  //init State
  state = {
    active: 'ALL',
    portfolioData: [],
    loading: true,
    err: false
  };
  componentDidMount() {
    this.getPortFolioData();
  }

  getPortFolioData = () => {
    this.setState({ loading: true });
    this.setState({ err: false });
    axios
      .get('/api/projects')
      .then(res => {
        this.setState({ loading: false });
        this.setState({ portfolioData: res.data });
      })
      .catch(err => {
        this.setState({ loading: false });
        this.setState({ err: true });
      });
  };
  loadAgainHund = () => {
    this.getPortFolioData();
  };
  activeStateHund = value => {
    this.setState({ active: value });
  };
  render() {
    //projects data

    return (
      <section className='portfolio-sec' id='projects'>
        <PortHund
          active={this.state.active}
          activeStateHund={this.activeStateHund}
        />
        <PortProjects
          active={this.state.active}
          projects={this.state.portfolioData}
        />
        <Spinner loading={this.state.loading} />
        {this.state.err ? <Error tryAgainClicked={this.loadAgainHund} /> : null}
      </section>
    );
  }
}

export default Portfolio;
