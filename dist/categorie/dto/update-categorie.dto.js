"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_categorie_dto_1 = require("./create-categorie.dto");
class UpdateCategorieDto extends (0, mapped_types_1.PartialType)(create_categorie_dto_1.CreateCategorieDto) {
}
exports.UpdateCategorieDto = UpdateCategorieDto;
//# sourceMappingURL=update-categorie.dto.js.map