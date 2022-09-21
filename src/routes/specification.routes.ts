import { response, Router } from "express";
import { specificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationRoutes = Router()

specificationRoutes.post("/", (request, response) => {
    return specificationController.handle(request,response)
})

specificationRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request,response)
})

export { specificationRoutes }