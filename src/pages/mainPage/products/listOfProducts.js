import React, { Component } from 'react';

import ProductPanel from './productPanel';
import HubstaffDirectory from '../../../static/images/HubstaffDirectory.png';
import Jira2017 from '../../../static/images/Jira2017.png';
import StackPro from '../../../static/images/StackPro.png';
import TraveChat from '../../../static/images/TraveChat.png';
import Network from '../../../static/images/Network.png';
import TimeCamp from '../../../static/images/TimeCamp.png';

import './popularProductsStyles.css';

export default class ListOfProducts extends Component {
  render() {
    return (
      <div className="product-list-wrapper">
        <ProductPanel src={HubstaffDirectory} text="Hubstaff Directory" />
        <ProductPanel src={Jira2017} text="Jira 2017" />
        <ProductPanel src={StackPro} text="Slack Pro" />
        <ProductPanel src={TraveChat} text="TraveChat" />
        <ProductPanel src={Network} text="Network" />
        <ProductPanel src={TimeCamp} text="Time Camp" />
      </div>
    );
  }
}
