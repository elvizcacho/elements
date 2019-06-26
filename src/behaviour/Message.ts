export default class Message {
  static messageCount = 0

  constructor(type, text) {
    this.date = new Date()
    this.type = type
    this.text = text
    this.id = Message.messageCount++
  }
}
