import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { contactResolverResolver } from './contact.resolver.resolver';

describe('contactResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => contactResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
