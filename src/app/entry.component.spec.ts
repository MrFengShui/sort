import { TestBed } from '@angular/core/testing';

import { AppEntryComponent } from './entry.component';
import { AppEntryModule } from './entry.module';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppEntryModule
            ],
            declarations: [
                AppEntryComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppEntryComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});



