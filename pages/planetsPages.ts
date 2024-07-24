import { Page, Locator } from 'playwright';
import { getEnv } from '../support/env/env';

getEnv();
const baseUrl = process.env.BASEURL;

export class PlanetsPage {
    private readonly page: Page;
    private readonly planetsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.planetsButton = page.getByRole('link', {name: 'planets'});
    }

    async getPlanetsInfoByID(id: number) {
            await this.page.goto(`${baseUrl}`);           
            await this.planetsButton.click();
            const response = await this.page.request.get(`${baseUrl}/api/planets/${id}/`);
            return await response.json();
    }
}