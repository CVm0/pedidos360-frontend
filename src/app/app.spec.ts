import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { of } from 'rxjs';

import { App } from './app';

class MsalServiceStub {
  instance = {
    getAllAccounts: () => [],
    getActiveAccount: () => null,
    setActiveAccount: () => {},
  };
  handleRedirectObservable = () => of(null);
}

class MsalBroadcastServiceStub {
  msalSubject$ = of();
  inProgress$ = of();
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        { provide: MsalService, useClass: MsalServiceStub },
        { provide: MsalBroadcastService, useClass: MsalBroadcastServiceStub },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
