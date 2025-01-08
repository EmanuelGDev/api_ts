import {FastifyRequest, FastifyReply} from "fastify"
import {ListCustomersService} from '../services/ListCustomersService'

class listCustomersController {
    async handle(fastify : FastifyRequest , reply : FastifyReply){

        const listCustomersService = new ListCustomersService();

        const customers  = await listCustomersService.execute();

        reply.send(customers)
    }
}

export {listCustomersController} 