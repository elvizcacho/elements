export default class Message {
  public date: Date
  public type: string
  public text: string
  public id: number
  static messageCount = 0

  constructor(type: string, text: string) {
    this.date = new Date()
    this.type = type
    this.text = text
    this.id = Message.messageCount++
  }
}
