import { SpecificationRepository } from "../../repositories/implements/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const specificationController = new CreateSpecificationController(createSpecificationUseCase)

export { specificationController }
