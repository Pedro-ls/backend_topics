import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "scores",
})
export class Score {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("double")
    score_general: number;
    @Column("double")
    score_ux: number;
    @Column("double")
    score_usability: number;
    @Column("double")
    score_accebility: number;
}
