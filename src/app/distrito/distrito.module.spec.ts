import { DistritoModule } from './distrito.module';

describe('DistritoModule', () => {
  let distritoModule: DistritoModule;

  beforeEach(() => {
    distritoModule = new DistritoModule();
  });

  it('should create an instance', () => {
    expect(distritoModule).toBeTruthy();
  });
});
