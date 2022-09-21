import { SpecificationRepository } from "../../repositories/implements/SpecificationRepository"

interface IRequest{
    name: string
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository : SpecificationRepository){}

    execute({name, description} : IRequest) : void{
        const specificationAllReadyExists = this.specificationRepository.findByName(name);

        if(specificationAllReadyExists){
            throw new Error("Specification already exists!")
        }

        this.specificationRepository.create({name,description})
    }

}

export {CreateSpecificationUseCase}