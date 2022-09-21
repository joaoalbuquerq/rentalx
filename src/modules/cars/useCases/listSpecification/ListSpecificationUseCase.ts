import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase{

    constructor ( private specificationRepository : ISpecificationsRepository){}

    execute() : Specification[] {
        const specifications = this.specificationRepository.list()
        return specifications
    }
}

export { ListSpecificationUseCase }