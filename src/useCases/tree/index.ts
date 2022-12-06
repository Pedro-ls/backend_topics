import { Request, Response } from "express";

import { Accebility } from "../../entity/accebility";
import { AppDataSource } from "../../data-source";
import { Evaluate } from "../../entity/evaluate";
import { UX } from "../../entity/ux";
import { Usability } from "../../entity/usability";

export const getTree = async (req: Request, res: Response) => {
    const { idScore } = req.params;

    try {
        const evaluateRepository = AppDataSource.getRepository(Evaluate);
        const evaluates = await evaluateRepository.findOne({
            where: {
                id: Number(idScore),
            },
            relations: {
                accebility: true,
                usability: true,
                ux: true,
            },
        });

        const accebilityRepository = AppDataSource.getRepository(Accebility);

        const accebilities = await accebilityRepository.findOneBy({
            id: evaluates?.accebility.id,
        });

        const usabilityRepository = AppDataSource.getRepository(Usability);

        const usabilities = await usabilityRepository.findOneBy({
            id: evaluates?.usability.id,
        });

        const uxRepository = AppDataSource.getRepository(UX);

        const ux = await uxRepository.findOneBy({
            id: evaluates?.ux.id,
        });

        return res.json({
            list: {
                accebilities,
                usabilities,
                ux,
            },
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            object: null,
            success: false,
        });
    }
};
