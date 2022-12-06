import "reflect-metadata";

import * as bodyParser from "body-parser";

import { Joi, celebrate, errors } from "celebrate";
import {
    getAccebility,
    listAccebility,
    registerAccebility,
} from "./useCases/accesibility";
import {
    getEvaluate,
    listEvaluate,
    registerEvaluate,
} from "./useCases/evaluates";
import { getScore, listScores, registerScore } from "./useCases/score";

import { AppDataSource } from "./data-source";
import cors from "cors";
import express from "express";
import { getTree } from "./useCases/tree/index";
import { registerUX } from "./useCases/UX";
import { registerUsability } from "./useCases/usability";

AppDataSource.initialize()
    .then(() => {
        console.clear();
        console.log("15%");

        const app = express();
        app.use(bodyParser.json());
        app.use(
            cors({
                allowedHeaders: "*",
            })
        );

        console.log("20%");
        console.clear();

        app.use(errors());

        // routes
        console.clear();
        console.log("50%");

        app.post(
            "/ux",
            celebrate(
                {
                    body: {
                        company_information: Joi.number()
                            .required()
                            .max(1)
                            .min(0),
                        company_reputation: Joi.number()
                            .required()
                            .max(1)
                            .min(0),
                        privacy_police: Joi.number().required().max(1).min(0),
                        clients_opinion: Joi.number().required().max(1).min(0),
                        pleasurable: Joi.number().required().max(1).min(0),
                        padlock: Joi.number().required().max(1).min(0),
                        weight_company_information: Joi.number().required(),

                        weight_company_reputation: Joi.number().required(),

                        weight_privacy_police: Joi.number().required(),

                        weight_clients_opinion: Joi.number().required(),

                        weight_pleasurable: Joi.number().required(),

                        weight_padlock: Joi.number().required().max(1).min(0),
                    },
                },
                { abortEarly: false }
            ),
            registerUX
        );

        console.clear();
        console.log("70%");

        // register
        app.post("/accebilities", registerAccebility);
        app.post("/usabilities", registerUsability);
        app.post("/evaluates", registerEvaluate);
        app.post("/scores", registerScore);

        // list
        app.get("/accebilities", listAccebility);
        app.get("/evaluates", listEvaluate);
        app.get("/scores", listScores);

        // one
        app.get("/accebilities/:id", getAccebility);
        app.get("/evaluates/:id", getEvaluate);
        app.get("/scores/:id", getScore);

        app.get("/tree/:idScore", getTree);

        console.clear();
        console.log("80%");

        // start express server
        app.listen(3000);
        console.clear();

        // message success
        console.log(
            "Express server has started on port 3000 http://localhost:3000"
        );
    })
    .catch((error) => console.log(error));
