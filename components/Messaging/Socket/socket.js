import { io } from 'socket.io-client';
import portNumber from '../../../Portnumber/portNumber';



export default socket = io(`http://${portNumber}:3000`);