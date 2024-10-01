import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!') 
})

export default app

import { cities, parkings } from './data/staticDatabase'
console.log(cities)
console.log(parkings);
