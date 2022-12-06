import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class accebility1669288980318 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "accebilities",
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
                        name: "simple_screen",
                        type: "double",
                        isNullable: false,
                    },

                    { name: "colors_fonts", type: "double", isNullable: false },

                    {
                        name: "system_perception",
                        type: "double",
                        isNullable: false,
                    },

                    {
                        name: "page_performance",
                        type: "double",
                        isNullable: false,
                    },

                    { name: "back_button", type: "double", isNullable: false },

                    {
                        name: "focus_perception",
                        type: "double",
                        isNullable: false,
                    },

                    { name: "broken_links", type: "double", isNullable: false },

                    {
                        name: "affordable_prices",
                        type: "double",
                        isNullable: false,
                    },
                    
                    {
                        name: "perception",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "operability",
                        type: "double",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("accebilities", true);
    }
}
