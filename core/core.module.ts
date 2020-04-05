import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as cmp from './components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { KeysPipe } from './pipes/keys.pipe';
import { StartCasePipe } from './pipes/startcase.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuardService } from './services';

const routes = [
    {
        path: 'auth-callback',
        component: cmp.AuthCallbackComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatChipsModule,
        MatFormFieldModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        MatIconModule,
        AutosizeModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        KeysPipe,
        StartCasePipe,
        cmp.CardPageComponent,
        cmp.MultiInputComponent,
        cmp.ObjectInputComponent,
        cmp.SpinnerComponent
    ],
    declarations: [
        cmp.AuthCallbackComponent,
        cmp.CardPageComponent,
        cmp.MultiInputComponent,
        cmp.ObjectInputComponent,
        cmp.SpinnerComponent,
        KeysPipe,
        StartCasePipe
    ],
    providers: [
        AuthGuardService
    ]
})
export class EbsCoreModule { }
