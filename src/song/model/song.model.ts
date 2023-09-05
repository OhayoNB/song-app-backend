import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Song extends Model {

    @Column
    songName: string;

    @Column
    band: string;

    @Column
    year: number;
}