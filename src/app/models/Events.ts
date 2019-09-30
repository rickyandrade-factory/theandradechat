export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  JOIN_ROOM = 'joinRoom',
  ROOM_LIST = 'nsRoomList',
  ROOM_HISTORY = 'historyCatchUp',
  INCOMING_MESSAGE = 'messageToClients',
  OUTGOING_MESSAGE = 'newMessageToServer'
}
