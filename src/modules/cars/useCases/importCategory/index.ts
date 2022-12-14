import { CategoriesRepository } from "../../repositories/implements/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController}