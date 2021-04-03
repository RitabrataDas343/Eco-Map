import React, { Component } from 'react';
import {web3, portis} from '../services/web3'

export default class SendTransferForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         senderAddress: '',
         receiverAddress: '',
         amount: 1,
         senderBalance: 0,
         receiverBalance: 0,
         message: '',
      };
   }

   activateMenu() {
      portis.showPortis();
   }

   async checkBalance() {
      let senderBalance=0;
      if(web3.utils.isAddress(this.state.senderAddress)) {
         senderBalance=web3.utils.fromWei(
            await web3.eth.getBalance(this.state.senderAddress)
         );
      }
   }
   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   componentDidMount() {
      portis.onLogin((senderAddress)=> {
         this.setState({senderAddress});
         this.checkBalance();
      });

      portis.onActiveWalletChanged((senderAddress) => {
         this.setState({ senderAddress });
      });
   }

   render() {
      return (
         <div>
            <div className="row">
               <div className="nine columns smallTop">
                  {this.state.message && <b>{this.state.message}</b>}
               </div>
               <div className="three columns u-pull-right">
                  <button type="button" className="u-full-width" onClick={this.activateMenu()}>
                     Portis Menu
                  </button>
               </div>
            </div>

            <form>
               <div className="row smallTop">
                  <div className="six columns">
                     <label>Sender Address</label>
                     <input
                        name="senderAddress"
                        value={this.state.senderAddress}
                        type="text"
                        className="u-full-width"
                        placeholder="Loading..."
                        disabled
                     />
                  </div>
                  <div className="six columns">
                     <label>Receiver Address</label>
                     <input
                        name="receiverAddress"
                        //value={this.state.receiverAddress}
                        type="text"
                        className="u-full-width"
                        value="0x3c8cB169281196737c493AfFA8F49a9d823bB9c5"
                        required
                        onChange={this.onChange.bind(this)}
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="six columns">
                     <label>Amount</label>
                     <input
                        name="amount"
                        value={this.state.amount}
                        type="text"
                        className="u-full-width"
                        placeholder="Amount to send"
                        required
                        onChange={this.onChange.bind(this)}
                     />
                  </div>
                  {/* <div className="three columns">
                     <label>Sender Balance</label>
                     <p>{this.state.senderBalance} ETH</p>
                  </div>
                  <div className="three columns">
                     <label>Receiver Balance</label>
                     <p>{this.state.receiverBalance} ETH</p>
                  </div> */}
               </div>
               <div className="row">
                  <div className="six columns">
                     <button
                        type="button"
                        className="button-primary u-full-width"
                        disabled={!this.state.receiverAddress}
                     >
                        Transfer
                     </button>
                  </div>
                  <div className="six columns">
                     <button type="button" className="u-full-width" onClick={this.checkBalance.bind(this)}>
                        Check Balance
                     </button>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}
