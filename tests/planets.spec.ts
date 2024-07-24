import { expect } from '@playwright/test';
import { test } from '../support/fixtures/pageFixtures';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Planets Test suite', () =>{
    
    test('Retrieve "Yavin IV" information', {tag: ['@smoke', '@planets']}, async ({ planetsPage }) => {
        const planetInfo = await planetsPage.getPlanetsInfoByID(3);    
        expect(planetInfo?.name).toBe("Yavin IV");
    });
    
    test('Planets Steps test', {tag:['@planets']}, async ()=>{
        test.step('Verify Step 1', ()=>{

        })
        test.step('Verify Step 2', ()=>{

        })
    })
    
});