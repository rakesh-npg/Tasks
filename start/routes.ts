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
import { test } from '@japa/runner'
import Authenticator from 'App/Middleware/Authenticator'
//Route.post('/create', 'EmpsController.create')

Route.group(() => {
    Route.post('/create', 'EmpsController.create')
    Route.put('/update', 'EmpsController.update')
    Route.delete('/delete/:id', 'EmpsController.del')
    Route.get('/read', 'EmpsController.read')
    Route.get('/read/:id', 'EmpsController.read_id')

    
}).prefix('/emp').middleware('test')

Route.group(() => {
    Route.post('/create', 'DeptsController.create')
    Route.put('/update', 'DeptsController.update')
    Route.delete('/delete/:id', 'DeptsController.del')
    Route.get('/read', 'DeptsController.read')
    Route.get('/read/:id', 'DeptsController.read_id')
    
}).prefix('/dept')   


Route.get('/getDept/:id', 'EmpsController.getDept')

Route.post('/getEmps', 'EmpsController.getEmps')

