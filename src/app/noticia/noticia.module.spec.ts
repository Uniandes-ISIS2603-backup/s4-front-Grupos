import { NoticiaModule } from './noticia.module';

describe('NoticiaModule', () => {
  let noticiaModule: NoticiaModule;

  beforeEach(() => {
    noticiaModule = new NoticiaModule();
  });

  it('should create an instance', () => {
    expect(noticiaModule).toBeTruthy();
  });
});
