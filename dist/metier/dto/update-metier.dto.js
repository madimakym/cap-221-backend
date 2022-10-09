"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMetierDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_metier_dto_1 = require("./create-metier.dto");
class UpdateMetierDto extends (0, mapped_types_1.PartialType)(create_metier_dto_1.CreateMetierDto) {
}
exports.UpdateMetierDto = UpdateMetierDto;
//# sourceMappingURL=update-metier.dto.js.map