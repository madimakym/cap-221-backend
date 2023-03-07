import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('api/v1/article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Post()
    create(@Body() createArticleDto: CreateArticleDto) {
        return this.articleService.create(createArticleDto);
    }

    @Get('/get/:name')
    findAll(@Param('name') name: string) {
            return this.articleService.findAll(name);
    }

    @Get()
    findAllSimple() {
            return this.articleService.findAllSimple();
    }

    @Post('/groupe')
    findByGroupe(@Body() { groupe }) {
        return this.articleService.findByGroupe(groupe);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articleService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
        return this.articleService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.articleService.remove(+id);
    }
}
