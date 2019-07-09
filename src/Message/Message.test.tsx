import Message from './Message'

test('it should increase message counter', () => {
  const msg1 = new Message('a', 'b')
  const msg2 = new Message('c', 'd')
  expect(msg1.id).toBe(0)
  expect(msg2.id).toBe(1)
})
