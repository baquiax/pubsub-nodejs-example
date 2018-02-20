const readline = require('readline')
const pubSub = require('pubsub-js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const handlingMessage = (message, data) => {
  console.info('\n** message: ', message, ' data:', data, '**\n')
}

pubSub.subscribe('test', handlingMessage)

const ask = () => {
  rl.question('\nWhat is the topic? ', (topic) => {
    rl.question('What is the message? ', (message) => {
      pubSub.publish(topic, message)
      ask()
    })
  })
}
ask()
