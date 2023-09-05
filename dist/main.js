"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    let corsOptions;
    if (process.env.NODE_ENV === 'production') {
        corsOptions = {
            origin: [
                'http://localhost:3000',
            ],
            credentials: true,
        };
    }
    else {
        corsOptions = {
            origin: [
                'http://localhost:3000',
            ],
            credentials: true,
        };
    }
    app.enableCors(corsOptions);
    await app.listen(3030);
}
bootstrap();
//# sourceMappingURL=main.js.map