import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {

    constructor( private listSpecificationUseCase : ListSpecificationUseCase){}

    handle(request : Request, response : Response) : Response {
        const listOfSpecifications = this.listSpecificationUseCase.execute()
        return response.json(listOfSpecifications)
    }

}

export { ListSpecificationController }