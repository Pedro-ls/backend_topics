import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "accebilities",
})
export class Accebility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("double")
    simple_screen: number;

    @Column("double")
    colors_fonts: number;

    @Column("double")
    system_perception: number;

    @Column("double")
    page_performance: number;

    @Column("double")
    back_button: number;

    @Column("double")
    focus_perception: number;

    @Column("double")
    broken_links: number;

    @Column("double")
    affordable_prices: number;

    @Column("double")
    perception: number;

    @Column("double")
    operability: number;
}
