import {PatrocinioModule} from './patrocinio.module';

describe('PatrocinioModule', () => {
    let patrocinioModule: PatrocinioModule;

    beforeEach(() => {
        patrocinioModule = new PatrocinioModule();
    });

    it('should create an instance', () => {
        expect(patrocinioModule).toBeTruthy();
    });
})


