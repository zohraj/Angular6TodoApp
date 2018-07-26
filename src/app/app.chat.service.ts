import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

export class ChatService {
    private url = environment.baseUrl;
    private socket;
    constructor() {
        /**
         * anything that needs to be loaded when an instance of service created
         */
    }
    /**
     * custom function to initiate the socket events
     */
    init() {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.socket = io(this.url, { query: "id=" + user._id }, { path: '/stomp' });
        /**
         * on receiving new message from server
         */
        this.socket.on('new-message', this.onMessage);
        /**
         * on new connection creation
         */
        this.socket.on('connect', this.onConnect);
        /**
         * on disconnection
         */
        this.socket.on('disconnect', this.onDisconnect);
        /**
         * on connection error
         */
        this.socket.on('connect_error', this.onError);
        /**
         * when reconnect try fails
         */
        this.socket.on('reconnect_error', this.onError);
    }
    public onConnect = (evt) => {
        console.log("CONNECTED");
    }
    public onDisconnect(evt) {
        console.log("DISCONNECTED");
    }
    public onMessage(data) {
        console.log('<span >RESPONSE: ' + data + '</span>');
    }
    public onError(message) {
        console.log('<span >ERROR:</span> ' + message);
    }
    /**
     *  To send the message to server from input field
     * @param toUserId recepient id to whom the user is sending the message
     * @param message message body to be sent
     */
    public sendMessage(toUserId, message) {
        this.socket.emit('new-message', { to: toUserId, message: message });
    }
    /** 
     * todo: to use it later
    */
    /* public getMessages() {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                console.log(message);
                observer.next(message);

            });
        });
    } */


}






