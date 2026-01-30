import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDescriptionCards } from './section-description-cards';

describe('SectionDescriptionCards', () => {
  let component: SectionDescriptionCards;
  let fixture: ComponentFixture<SectionDescriptionCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDescriptionCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDescriptionCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
