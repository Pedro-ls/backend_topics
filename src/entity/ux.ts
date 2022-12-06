import "reflect-metadata";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "ux",
})
export class UX {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("double")
    public company_information: number;

    @Column("double")
    public company_reputation: number;

    @Column("double")
    public privacy_police: number;

    @Column("double")
    public clients_opinion: number;

    @Column("double")
    pleasurable: number;

    @Column("double")
    padlock: number;
}
