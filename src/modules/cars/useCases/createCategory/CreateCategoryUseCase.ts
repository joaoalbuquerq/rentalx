import { CategoriesRepository } from "../../repositories/implements/CategoriesRepository"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IResquest {
    name:string,
    description: string
}

class CreateCategoryUseCase{

    constructor(private categoriesRepository : ICategoriesRepository){}

    execute({name,description} : IResquest) : void{
        const cateogryAlreadyExists = this.categoriesRepository.findByName(name);

        if(cateogryAlreadyExists){
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({name,description});
    }
}

export {CreateCategoryUseCase}