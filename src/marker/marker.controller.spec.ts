import { MarkerController } from './marker.controller';
import { MarkerService } from './marker.service';
import { Test } from '@nestjs/testing';


describe('MarkerController', () => {
  let markerController: MarkerController;
  let markerService: MarkerService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [MarkerController],
        providers: [MarkerService],
      }).compile();

      markerService = moduleRef.get<MarkerService>(MarkerService);
      markerController = moduleRef.get<MarkerController>(MarkerController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      // jest.spyOn(markerService, 'findAll').mockImplementation(() => result);
      expect(await markerController.getAllMarkers()).toBe(result);
    });
  });
});