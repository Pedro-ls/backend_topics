import { Request, Response } from "express";

import { AppDataSource } from "../../data-source";
import { Score } from "../../entity/score";

export async function registerScore(req: Request, res: Response) {
    const { score_general, score_ux, score_usability, score_accebility } =
        req.body;

    try {
        const repositoryScore = AppDataSource.getRepository(Score);

        const score = repositoryScore.create({
            score_general,
            score_ux,
            score_usability,
            score_accebility,
        });

        const response = await repositoryScore.save(score);
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

export async function listScores(req: Request, res: Response) {
    try {
        const scoreRepository = AppDataSource.getRepository(Score);

        const scores = await scoreRepository.find();

        return res.json({
            list: scores,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            object: null,
            success: false,
        });
    }
}

export async function getScore(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const accebilityRepository = AppDataSource.getRepository(Score);

        const accebility = await accebilityRepository.findOne({
            where: {
                id: Number(id),
            },
        });

        if (accebility) {
            res.json({
                object: accebility,
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
