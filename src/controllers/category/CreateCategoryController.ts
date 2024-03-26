import { Request, Response} from "express";
import { CreatecategoryService } from "../../services/category/CreatecategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body
    const createCategoryService = new CreatecategoryService();

    const category = await createCategoryService.execute({ name });

    return res.json(category);
  }  
}

export { CreateCategoryController }