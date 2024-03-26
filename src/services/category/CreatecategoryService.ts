import prismaClient from "../../prisma";

interface categoryRequest{
    name: string;
}

class CreatecategoryService{
    async execute({ name }: categoryRequest) {
        if (name === '') {
          // Verificar se ele enviou um nome de categoria
          throw new Error("Name invalid");
        }
    
    
            
        const category = await prismaClient.category.create({
          data:{ name: name, },
          select:{ id: true, name: true, }
        })
    
        return category;
    }
}

export { CreatecategoryService }