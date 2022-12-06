import { Request, Response } from "express";

import { Accebility } from "../../entity/accebility";
import { AppDataSource } from "../../data-source";
import { Evaluate } from "../../entity/evaluate";
import { Usability } from "../../entity/usability";
import { UX } from "../../entity/ux";
import { Score } from "../../entity/score";

export async function registerEvaluate(req: Request, res: Response) {
    const { usability, ux, accebility, score } = req.body;

    try {
        const repositoryEvaluates = AppDataSource.getRepository(Evaluate);
        const repositoryUX = AppDataSource.getRepository(UX);
        const repositoryUsability = AppDataSource.getRepository(Usability);
        const repositoryAccebility = AppDataSource.getRepository(Accebility);
        const repositoryScore = AppDataSource.getRepository(Score);

        const accebilityObject = await repositoryAccebility.findOne({
            where: accebility,
        });
        const usabilityObject = await repositoryUsability.findOne({
            where: usability,
        });

        const uxObject = await repositoryUX.findOne({
            where: ux,
        });

        const scoreObject = await repositoryScore.findOne({
            where: score,
        });
        if (scoreObject && uxObject && usabilityObject && accebilityObject) {
            const evaluate = await repositoryEvaluates.create({
                score: scoreObject,
                ux: uxObject,
                usability: usabilityObject,
                accebility: accebilityObject,
            });

            const response = await repositoryEvaluates.save(evaluate);

            if (response) {
                res.json({
                    object: response,
                    success: true,
                });
            }
        } else {
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            object: null,
            success: false,
        });
    }
}

export async function listEvaluate(req: Request, res: Response) {
    try {
        const evaluateRepository = AppDataSource.getRepository(Evaluate);

        const evaluates = await evaluateRepository.find();

        return res.json({
            list: evaluates,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            object: null,
            success: false,
        });
    }
}

export async function getEvaluate(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const evaluatesRepository = AppDataSource.getRepository(Evaluate);

        const evaluates = await evaluatesRepository.findOne({
            where: {
                id: Number(id),
            },
            relations: {
                accebility: true,
                usability: true,
                ux: true,
            },
        });

        if (evaluates) {
            res.json({
                object: evaluates,
                success: true,
            });
        } else {
            res.status(404).json({
                object: null,
                success: false,
            });
        }
    } catch (err) {
        res.status(500).json({
            object: null,
            success: false,
        });
    }
}
