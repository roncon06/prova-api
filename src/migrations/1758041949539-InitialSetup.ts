import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSetup1758041949539 implements MigrationInterface {
    name = 'InitialSetup1758041949539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cursos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cargaHoraria" integer NOT NULL, "dataInicio" date NOT NULL, CONSTRAINT "PK_391c5a635ef6b4bd0a46cb75653" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disciplinas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cursoId" integer, CONSTRAINT "PK_63ac31213d82b3a8e99c1a6c4a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "disciplinas" ADD CONSTRAINT "FK_a36c2222e890d1cc696a44138e2" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplinas" DROP CONSTRAINT "FK_a36c2222e890d1cc696a44138e2"`);
        await queryRunner.query(`DROP TABLE "disciplinas"`);
        await queryRunner.query(`DROP TABLE "cursos"`);
    }

}
