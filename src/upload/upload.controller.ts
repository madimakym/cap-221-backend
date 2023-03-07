import { Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from '../utils/helper';


@Controller()
export class UploadController {

    @Post('api/v1/upload')
    @UseInterceptors(
        FileInterceptor('file'
            , {
                storage: diskStorage({
                    destination: Helper.destinationPath,
                    filename: function (req, file, cb) {
                        cb(null, 'img' + '-' + Date.now() + '.' + file.originalname.split('.').pop());
                    }
                }),
            }
        ),
    )
    uploadFile(@UploadedFile() file) {
        console.log('ok');
        return file;
    }

    @Post('api/v1/upload/article')
    @UseInterceptors(
        FileInterceptor('file'
            , {
                storage: diskStorage({
                    destination: Helper.destinationPath,
                    filename: function (req, file, cb) {
                        cb(null, 'img' + '-' + Date.now() + '.' + file.name.split('.').pop());
                    }
                }),
            }
        ),
    )
    uploadFileArticle(@UploadedFile() file) {
        console.log('ok');
        return file;
    }


    @Post('api/v1/uploads')
    @UseInterceptors(
        FilesInterceptor('file', 10, {
            storage: diskStorage({
                destination: Helper.destinationPath,
                filename: Helper.customFileName,
            }),
        }),
    )
    uploadMultiple(@UploadedFiles() files) {
        return files;
    }

    @Get(':name')
    async serveAvatar(@Param('name') fileId, @Res() res): Promise<any> {
        res.sendFile(fileId, { root: 'uploads' });
    }
}

