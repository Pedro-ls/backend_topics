import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";
//
//
export class Evaluate1669375166102 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "evaluates",
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
                        name: "usability",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "accebility",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "ux",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "score",
                        type: "integer",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["usability"],
                        referencedTableName: "usabilities",
                        referencedColumnNames: ["id"],
                    }),
                    new TableForeignKey({
                        columnNames: ["accebility"],
                        referencedTableName: "accebilities",
                        referencedColumnNames: ["id"],
                    }),
                    new TableForeignKey({
                        columnNames: ["ux"],
                        referencedTableName: "ux",
                        referencedColumnNames: ["id"],
                    }),
                    new TableForeignKey({
                        columnNames: ["score"],
                        referencedTableName: "scores",
                        referencedColumnNames: ["id"],
                    }),
                ],
            }),
            true,
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
