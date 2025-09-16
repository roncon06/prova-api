import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1757978416721 implements MigrationInterface {
    name = 'InitialSetup1757978416721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cursos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cargaHoraria" integer NOT NULL, "dataInicio" TIMESTAMP NOT NULL, CONSTRAINT "PK_391c5a635ef6b4bd0a46cb75653" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disciplinas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_63ac31213d82b3a8e99c1a6c4a3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "disciplinas"`);
        await queryRunner.query(`DROP TABLE "cursos"`);
    }

}
