import Portis from '@portis/web3';
import Web3 from 'web3';

export const portis = new Portis('44d77243-83e4-4b4d-88a9-d93790c9503b', 'ropsten');
export const web3 = new Web3(portis.provider);
