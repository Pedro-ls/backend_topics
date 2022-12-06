import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class usability1669288373052 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usabilities",
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
                        name: "responsibility",
                        type: "double",
                        isNullable: false,
                    },

                    {
                        name: "environment_flexibility",
                        type: "double",
                        isNullable: false,
                    },

                    {
                        name: "general_flexibility",
                        type: "double",
                        isNullable: false,
                    },

                    { name: "satisfaction", type: "double", isNullable: false },

                    {
                        name: "page_performance",
                        type: "double",
                        isNullable: false,
                    },

                    {
                        name: "learning_ability",
                        type: "double",
                        isNullable: false,
                    },

                    {
                        name: "safety_in_use",
                        type: "double",
                        isNullable: false,
                    },

                    { name: "utility", type: "double", isNullable: false },

                    {
                        name: "efficiency",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "performance",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "navigation",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "easy_learning",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "coherent_buttons",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "number_of_defects",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "defect_handling",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "faults_users",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "faults_users_general",
                        type: "double",
                        isNullable: false,
                    }
                ],
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usabilities", true);
    }
}
