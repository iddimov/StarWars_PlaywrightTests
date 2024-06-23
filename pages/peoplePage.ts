import { Page } from 'playwright';
import { getEnv } from '../support/env/env';

getEnv();
const baseUrl = process.env.BASEURL;

export class PeoplePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getPersonsInfoByID(id: number) {
            await this.page.goto(`${baseUrl}`);           
            await this.page.getByRole('button', {name: 'request'}).click();
            const response = await this.page.request.get(`${baseUrl}/api/people/${id}/`);
            return await response.json();
    }
}