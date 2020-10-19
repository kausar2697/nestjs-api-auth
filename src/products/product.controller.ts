
import {Controller , Post ,Body, Get , Param, Patch , Delete,UseGuards} from '@nestjs/common'
import {ProductService} from './products.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductController {
    constructor(private readonly ProductService: ProductService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    addProduct(@Body('title') prodTitle : string,
               @Body('description') prodDesc:string,
               @Body('price') prodPrice:number ) {
     const generetedId =  this.ProductService.insertProduct(prodTitle, prodDesc, prodPrice);
     return {id : generetedId}

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllProduct(){
        return this.ProductService.getProducts();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.ProductService.getSingleProduct(prodId)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateProduct(@Param('id') prodId:string, @Body('title') prodTitle : string,
    @Body('description') prodDesc:string,
    @Body('price') prodPrice:number ){
        this.ProductService.updateProduct(prodId,prodTitle,prodDesc,prodPrice)
        return null
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        return this.ProductService.deleteProduct(prodId)
    }
}