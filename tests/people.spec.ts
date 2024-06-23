import { test, expect } from '@playwright/test';
import { PeoplePage } from  '../pages/peoplePage';
import dotenv from 'dotenv';

dotenv.config();

test('Retrieve Luke Skywalker information', async ({ page }) => {    
    const peoplePage = new PeoplePage(page);
    const lukeInfo = await peoplePage.getPersonsInfoByID(1);
    
    expect(lukeInfo?.name).toBe("Luke Skywalker");

});
