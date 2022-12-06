import { Request, Response } from "express";

import { Accebility } from "../../entity/accebility";
import { AppDataSource } from "../../data-source";

export async function registerAccebility(req: Request, res: Response) {
    const {
        simple_screen,
        colors_fonts,
        system_perception,
        page_performance,
        back_button,
        focus_perception,
        broken_links,
        affordable_prices,
        perception,
        operability,
    } = req.body;

    try {
        const repositoryAccebility = AppDataSource.getRepository(Accebility);

        const accebility = repositoryAccebility.create({
            simple_screen,
            colors_fonts,
            system_perception,
            page_performance,
            back_button,
            focus_perception,
            broken_links,
            affordable_prices,
            perception,
            operability
        });

        const response = await repositoryAccebility.save(accebility);
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

export async function listAccebility(req: Request, res: Response) {
    try {
        const accebilityRepository = AppDataSource.getRepository(Accebility);

        const accebilities = await accebilityRepository.find();

        return res.json({
            list: accebilities,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            object: null,
            success: false,
        });
    }
}

export async function getAccebility(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const accebilityRepository = AppDataSource.getRepository(Accebility);

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
