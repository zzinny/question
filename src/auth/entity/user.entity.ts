import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    email: string;

    @Column({ length: 16 })
    password: string;

    @Column({ length: 20 })
    name: string;

    @Column({ length: 20 })
    organization: string;
}
