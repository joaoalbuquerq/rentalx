import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";
import { CategoriesRepository } from "./CategoriesRepository";

class SpecificationRepository implements ISpecificationsRepository{

    private specification : Specification[]

    private static INSTANCE: SpecificationRepository

    private constructor(){
        this.specification = []
    }

    public static getInstance() : SpecificationRepository{
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }

        return SpecificationRepository.INSTANCE
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specification.push(specification)
    }

    list() : Specification[]{
        return this.specification
    }

    findByName(name : string) : Specification{
        const specification = this.specification.find(spec => spec.name === name)
        return specification
    }
}

export {SpecificationRepository}