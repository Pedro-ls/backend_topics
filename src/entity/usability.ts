import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "usabilities",
})
export class Usability {
    @PrimaryGeneratedColumn()
    id: number;
    // values
    @Column("double")
    responsibility: number;
    @Column("double")
    environment_flexibility: number;
    @Column("double")
    general_flexibility: number;
    @Column("double")
    satisfaction: number;
    @Column("double")
    page_performance: number;
    @Column("double")
    learning_ability: number;
    @Column("double")
    safety_in_use: number;
    @Column("double")
    utility: number;
    @Column("double")
    efficiency: number;
    @Column("double")
    performance: number; // desempenho
    @Column("double")
    navigation: number;
    @Column("double")
    easy_learning: number;
    @Column("double")
    coherent_buttons: number;
    @Column("double")
    number_of_defects: number;
    @Column("double")
    defect_handling: number;
    @Column("double")
    faults_users: number;
    @Column("double")
    faults_users_general: number;
}
