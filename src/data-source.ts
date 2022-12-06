import { Accebility } from "./entity/accebility";
import { DataSource } from "typeorm";
import { Evaluate } from "./entity/evaluate";
import { UX } from "./entity/ux";
import { Usability } from "./entity/usability";
import { Score } from "./entity/score";
console.log("0%");
console.clear();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "web_evaluate",
    entities: ["**/entities/*.ts", UX, Usability, Accebility, Score, Evaluate],
    migrations: ["**/migration/*.ts"],
});
console.log("10%");

console.clear();
