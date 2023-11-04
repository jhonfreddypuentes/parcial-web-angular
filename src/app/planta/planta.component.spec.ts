import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { GetAllPlantsServiceService } from './GetAllPlantsService.service';
import { of } from 'rxjs';
import { Planta } from './planta'; // Asegúrate de importar la clase Planta

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let getAllPlantsServiceService: jasmine.SpyObj<GetAllPlantsServiceService>;

  beforeEach(() => {
    const getAllPlantsServiceSpy = jasmine.createSpyObj('GetAllPlantsServiceService', ['plantas']);
    
    TestBed.configureTestingModule({
      declarations: [PlantaComponent],
      providers: [{ provide: GetAllPlantsServiceService, useValue: getAllPlantsServiceSpy }]
    });

    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    getAllPlantsServiceService = TestBed.inject(GetAllPlantsServiceService) as jasmine.SpyObj<GetAllPlantsServiceService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the table with three rows and header', () => {
    const mockPlantas = [
      new Planta(1, 'Planta 1', 'Científico 1', 'Interior', 100, 'Clima 1', 'Sustrato 1'),
      new Planta(2, 'Planta 2', 'Científico 2', 'Exterior', 200, 'Clima 2', 'Sustrato 2'),
      new Planta(3, 'Planta 3', 'Científico 3', 'Interior', 150, 'Clima 3', 'Sustrato 3')
    ];
    
    getAllPlantsServiceService.plantas.and.returnValue(of(mockPlantas));
    
    fixture.detectChanges();

    const tableElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
    
    const headerRow = tableElement.querySelector('thead tr');
    expect(headerRow).toBeTruthy();
    
    const rows = tableElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
