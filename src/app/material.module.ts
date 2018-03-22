import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatGridListModule,
        MatProgressBarModule,
        MatInputModule,
        MatDatepickerModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatGridListModule,
        MatProgressBarModule,
        MatInputModule,
        MatDatepickerModule,
        MatMenuModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
