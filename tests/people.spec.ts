import { expect } from '@playwright/test';
import { test } from '../support/fixtures/pageFixtures';
import fs from "fs";
import {parse} from 'csv-parse/sync';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const folderPath = 'support/testData/';

const csvPeopleData = parse(fs.readFileSync(path.join(folderPath, 'peopleData.csv')), {
    columns: true,
    skip_empty_lines: true,
    //delimiter:";"
});

for(const csvPersonData of csvPeopleData){
    test(`Retrieve ${csvPersonData.name} information`, {tag: ['@smoke', '@people']}, async({peoplePage}) => {
        const personInfo = await peoplePage.getPersonsInfoByID(csvPersonData.id);    
        console.log(csvPersonData.name);
        console.log(csvPersonData.id);
        expect(personInfo?.name).toBe(csvPersonData.name);
    })
}

test.describe('People Test suite', () =>{
    
    test('Retrieve Luke Skywalker information', {tag: ['@smoke', '@people']}, async ({ peoplePage }) => {    
        const personInfo = await peoplePage.getPersonsInfoByID(1);    
        expect(personInfo?.name).toBe("Luke Skywalker");
    });
    
    test('People Steps test', {tag:['@people']}, async ({peoplePage})=>{
        const personInfo = await peoplePage.getPersonsInfoByID(1);   
        
        test.step('Verify Step 1', ()=>{ expect(personInfo?.name).toBe("Luke Skywalker"); })        
        test.step('Verify Step 2', ()=>{  /* not implemented yet*/ })
    })    
});