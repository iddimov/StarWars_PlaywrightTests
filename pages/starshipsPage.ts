import { Page } from 'playwright';
import { getEnv } from '../support/env/env';

getEnv();
const baseUrl = process.env.BASEURL;

export class StarshipsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getStarshipsInfoByID(id: number) {
            await this.page.goto(`${baseUrl}`);           
            await this.page.getByRole('link', {name: 'starships'}).click();
            const response = await this.page.request.get(`${baseUrl}/api/starships/${id}/`);
            return await response.json();
    }
}