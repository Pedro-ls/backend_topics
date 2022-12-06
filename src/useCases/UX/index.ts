import { Request, Response } from "express";

import { AppDataSource } from "../../data-source";
import { UX } from "../../entity/ux";

export async function registerUX(req: Request, res: Response) {
    const {
        company_information,
        company_reputation,
        privacy_police,
        clients_opinion,
        pleasurable,
        padlock,
    } = req.body;

    try {
        const repositoryUX = AppDataSource.getRepository(UX);
        const ux = repositoryUX.create({
            company_information,
            company_reputation,
            privacy_police,
            clients_opinion,
            pleasurable,
            padlock,
        });
        const response = await repositoryUX.save(ux);
        if (response) {
            res.json({
                object: response,
                success: true,
            });
        }
    } catch (err) {
        res.json({
            object: null,
            success: false,
        });
    }
}
