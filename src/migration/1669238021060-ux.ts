import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm";

export class ux1669238021060 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ux",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: "increment",
                    },
                    {
                        name: "company_information",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "company_reputation",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "privacy_police",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "clients_opinion",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "pleasurable",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "padlock",
                        type: "double",
                        isNullable: false,
                    },

               
                 
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ux", true);
    }
}
