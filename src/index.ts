import { Hono } from 'hono'
import { cities, parkings } from './data/staticDatabase'
import {getHome} from './controllers/HomeController'
import { getParkings } from './controllers/ReadAllCitiesController'
import {serveStatic} from 'hono/bun'
console.log(parkings);

const app = new Hono()

app.get('/',(c)=>getHome(c))
app.get('/cities', (c) => getParkings(c, parkings))
app.get('/parkings', (c) => c.text('GET /parkings'))

app.use('/static/*', serveStatic({ root: './' }))

export default app
