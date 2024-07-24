import {test as baseTest} from '@playwright/test'
import { PeoplePage } from '../../pages/peoplePage';
import { PlanetsPage } from '../../pages/planetsPages';
import { StarshipsPage} from '../../pages/starshipsPage'

type MyPageFixtures = {
    peoplePage: PeoplePage;
    planetsPage: PlanetsPage;
    starshipsPage: StarshipsPage;
}

export const test = baseTest.extend<MyPageFixtures>({
    peoplePage: async({page}, use)=>{
        const peoplePage = new PeoplePage(page);
        await use(peoplePage);
    },

    planetsPage: async({page}, use)=>{
        const planetsPage = new PlanetsPage(page);
        await use(planetsPage);
    },

    starshipsPage: async({page}, use)=>{
        const starshipsPage = new StarshipsPage(page);
        await use(starshipsPage);
    }
});