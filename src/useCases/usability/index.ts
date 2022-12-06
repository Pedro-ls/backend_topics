import { Request, Response } from "express";

import { AppDataSource } from "../../data-source";
import { Usability } from "../../entity/usability";

export async function registerUsability(req: Request, res: Response) {
    const {
        responsibility,
        environment_flexibility,
        general_flexibility,
        satisfaction,
        page_performance,
        learning_ability,
        safety_in_use,
        utility,
        efficiency,
        performance, // desempenho
        navigation,
        easy_learning,
        coherent_buttons,
        number_of_defects,
        defect_handling,
        faults_users,
        faults_users_general,
    } = req.body;

    try {
        const repositoryUsability = AppDataSource.getRepository(Usability);

        const usability = repositoryUsability.create({
            responsibility,
            environment_flexibility,
            general_flexibility,
            satisfaction,
            page_performance,
            learning_ability,
            safety_in_use,
            utility,
            efficiency,
            performance, // desempenho
            navigation,
            easy_learning,
            coherent_buttons,
            number_of_defects,
            defect_handling,
            faults_users,
            faults_users_general,
        });

        const response = await repositoryUsability.save(usability);
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
