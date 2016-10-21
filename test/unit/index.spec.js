/*global describe, expect, it, beforeEach*/
import { PersonIndex } from './../../src/PersonIndex';

describe( 'unit:Person', () => {

  let idx;
  beforeEach( () => {
    idx = new PersonIndex();
  } );

  it( 'should have a property person', () => {
    expect( idx.person ).to.exist;
    expect( idx.person ).to.be.an( 'object' );
  } );

  it( 'should have a property fullName', () => {
    expect( idx.person ).to.have.a.property( 'fullName', 'Stefan Walther' );
  } );

} );
