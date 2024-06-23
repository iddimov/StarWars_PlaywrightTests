export{};

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            ENV: "dev" | "qa" | "prod",
            BASEURL: string,
            //VAR: string
        }
    }
}