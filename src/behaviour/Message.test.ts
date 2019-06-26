import Message from './Message'

test('it should increase message counter', () => {
  const msg1 = new Message()
  const msg2 = new Message()
  expect(msg1.id).toBe(0)
  expect(msg2.id).toBe(1)
})
