import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class score1669295875322 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "scores",
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
                        name: "score_general",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "score_ux",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "score_usability",
                        type: "double",
                        isNullable: false,
                    },
                    {
                        name: "score_accebility",
                        type: "double",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
