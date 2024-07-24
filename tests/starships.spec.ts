import { expect } from '@playwright/test';
import { test } from '../support/fixtures/pageFixtures';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Planets Test suite', () =>{
    
    test('Retrieve "Death Star" information', {tag: ['@smoke', '@starships']}, async ({ starshipsPage }) => {    
        const starshipInfo = await starshipsPage.getStarshipsInfoByID(9);    
        expect(starshipInfo?.name).toBe("Death Star");
    });
    
    test('Starships Steps test', {tag:['@starships']}, async ()=>{
        test.step('Verify Step 1', ()=>{

        })
        test.step('Verify Step 2', ()=>{

        })
    })
    
});