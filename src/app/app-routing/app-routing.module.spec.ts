import {CiudadanoModule} from './ciudadano.module';

describe('CiudadanoModule', () => {
    let ciudadanoModule: CiudadanoModule;

    beforeEach(() => {
        ciudadanoModule = new CiudadanoModule();
    });

    it('should create an instance', () => {
        expect(ciudadanoModule).toBeTruthy();
    });
});


