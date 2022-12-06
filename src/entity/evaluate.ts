import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Accebility } from "./accebility";
import { UX } from "./ux";
import { Usability } from "./usability";
import { Score } from "./score";

@Entity({
    name: "evaluates",
})
export class Evaluate {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => Usability)
    @JoinColumn({
        name: "usability",
    })
    usability: Usability;

    @OneToOne(() => UX)
    @JoinColumn({
        name: "ux",
    })
    ux: UX;

    @OneToOne(() => Accebility)
    @JoinColumn({
        name: "accebility",
    })
    accebility: Accebility;

    @OneToOne(() => Score)
    @JoinColumn({
        name: "score",
    })
    score: Score;
}
