/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
  
Route.post('/cal', 'CalcsController.add').middleware('test')
Route.get('/getCal', 'CalcsController.test')
Route.get('/query', 'CalcsController.query')
Route.post('/test', 'CalcsController.add')
Route.get('/update', 'CalcsController.update')
Route.post('/delete', 'CalcsController.delete')
