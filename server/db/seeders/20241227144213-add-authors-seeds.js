"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * aw
     *  id: uuidv4(),ait queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    try {
      await queryInterface.bulkInsert("Authors", [
        {
          id: uuidv4(),
          name: "Aisha Khan",
          email: "aisha.khan@example.com",
          password: await bcrypt.hash("Booklover@2024", 10),
          genre: "FICTION",
          date_of_birth: "1980-05-14",
          profileImage: "https://example.com/images/aisha_khan.jpg",
        },
        {
          id: uuidv4(),
          name: "Carlos Mendoza",
          email: "carlos.mendoza@example.com",
          password: await bcrypt.hash("Literature@2024", 10),
          genre: "ROMANCE",
          date_of_birth: "1975-11-22",
          profileImage: "https://example.com/images/carlos_mendoza.jpg",
        },
        {
          id: uuidv4(),
          name: "Diana Patel",
          email: "diana.patel@example.com",
          password: await bcrypt.hash("ScienceFiction@2024", 10),
          genre: "SCIENCE FICTION",
          date_of_birth: "1989-02-03",
          profileImage: "https://example.com/images/diana_patel.jpg",
        },
        {
          id: uuidv4(),
          name: "John Okafor",
          email: "john.okafor@example.com",
          password: await bcrypt.hash("MysteryBooks@2024", 10),
          genre: "MYSTERY",
          date_of_birth: "1990-12-16",
          profileImage: "https://example.com/images/john_okafor.jpg",
        },
        {
          id: uuidv4(),
          name: "Rosa Fernandez",
          email: "rosa.fernandez@example.com",
          password: await bcrypt.hash("HistoricalFiction@2024", 10),
          genre: "HISTORICAL FICTION",
          date_of_birth: "1985-07-11",
          profileImage: "https://example.com/images/rosa_fernandez.jpg",
        },
        {
          id: uuidv4(),
          name: "Nina Wilson",
          email: "nina.wilson@example.com",
          password: await bcrypt.hash("YoungAdult@2024", 10),
          genre: "YOUNG ADULT",
          date_of_birth: "1995-04-19",
          profileImage: "https://example.com/images/nina_wilson.jpg",
        },
        {
          id: uuidv4(),
          name: "Kamal Singh",
          email: "kamal.singh@example.com",
          password: await bcrypt.hash("ActionAdventure@2024", 10),
          genre: "ACTION & ADVENTURE",
          date_of_birth: "1988-09-08",
          profileImage: "https://example.com/images/kamal_singh.jpg",
        },
        {
          id: uuidv4(),
          name: "Eleni Papadopoulos",
          email: "eleni.papadopoulos@example.com",
          password: await bcrypt.hash("Philosophy@2024", 10),
          genre: "PHILOSOPHY",
          date_of_birth: "1973-03-21",
          profileImage: "https://example.com/images/eleni_papadopoulos.jpg",
        },
        {
          id: uuidv4(),
          name: "Nadine Sykes",
          email: "nadine.sykes@example.com",
          password: await bcrypt.hash("Thriller@2024", 10),
          genre: "THRILLER",
          date_of_birth: "1991-06-14",
          profileImage: "https://example.com/images/nadine_sykes.jpg",
        },
        {
          id: uuidv4(),
          name: "Xander Franco",
          email: "xander.franco@example.com",
          password: await bcrypt.hash("Horror@2024", 10),
          genre: "HORROR",
          date_of_birth: "1984-10-02",
          profileImage: "https://example.com/images/xander_franco.jpg",
        },
        {
          id: uuidv4(),
          name: "Eva Alvarez",
          email: "eva.alvarez@example.com",
          password: await bcrypt.hash("RomanticDrama@2024", 10),
          genre: "ROMANTIC DRAMA",
          date_of_birth: "1992-01-17",
          profileImage: "https://example.com/images/eva_alvarez.jpg",
        },
        {
          id: uuidv4(),
          name: "Omar Farooq",
          email: "omar.farooq@example.com",
          password: await bcrypt.hash("PsychologicalThriller@2024", 10),
          genre: "PSYCHOLOGICAL THRILLER",
          date_of_birth: "1987-05-23",
          profileImage: "https://example.com/images/omar_farooq.jpg",
        },
        {
          id: uuidv4(),
          name: "Luna Martinez",
          email: "luna.martinez@example.com",
          password: await bcrypt.hash("FantasyTales@2024", 10),
          genre: "FANTASY",
          date_of_birth: "1993-08-13",
          profileImage: "https://example.com/images/luna_martinez.jpg",
        },
        {
          id: uuidv4(),
          name: "Samuel Stevens",
          email: "samuel.stevens@example.com",
          password: await bcrypt.hash("TechnoThriller@2024", 10),
          genre: "TECHNO THRILLER",
          date_of_birth: "1982-11-09",
          profileImage: "https://example.com/images/samuel_stevens.jpg",
        },
        {
          id: uuidv4(),
          name: "Jasmine Cooper",
          email: "jasmine.cooper@example.com",
          password: await bcrypt.hash("RomanticComedy@2024", 10),
          genre: "ROMANTIC COMEDY",
          date_of_birth: "1996-06-04",
          profileImage: "https://example.com/images/jasmine_cooper.jpg",
        },
        {
          id: uuidv4(),
          name: "Gustavo Rivera",
          email: "gustavo.rivera@example.com",
          password: await bcrypt.hash("PoliticalFiction@2024", 10),
          genre: "POLITICAL FICTION",
          date_of_birth: "1981-12-12",
          profileImage: "https://example.com/images/gustavo_rivera.jpg",
        },
        {
          id: uuidv4(),
          name: "Maya Verma",
          email: "maya.verma@example.com",
          password: await bcrypt.hash("Biographical@2024", 10),
          genre: "BIOGRAPHY",
          date_of_birth: "1984-01-28",
          profileImage: "https://example.com/images/maya_verma.jpg",
        },
        {
          id: uuidv4(),
          name: "Ravi Sharma",
          email: "ravi.sharma@example.com",
          password: await bcrypt.hash("LegalDrama@2024", 10),
          genre: "LEGAL DRAMA",
          date_of_birth: "1990-07-05",
          profileImage: "https://example.com/images/ravi_sharma.jpg",
        },
        {
          id: uuidv4(),
          name: "Isabella Wang",
          email: "isabella.wang@example.com",
          password: await bcrypt.hash("ClassicLit@2024", 10),
          genre: "CLASSIC LITERATURE",
          date_of_birth: "1988-09-18",
          profileImage: "https://example.com/images/isabella_wang.jpg",
        },
        {
          id: uuidv4(),
          name: "Leo Zhang",
          email: "leo.zhang@example.com",
          password: await bcrypt.hash("Postmodern@2024", 10),
          genre: "POSTMODERNISM",
          date_of_birth: "1986-03-27",
          profileImage: "https://example.com/images/leo_zhang.jpg",
        },
        {
          id: uuidv4(),
          name: "Sophia Mitchell",
          email: "sophia.mitchell@example.com",
          password: await bcrypt.hash("Cyberpunk@2024", 10),
          genre: "CYBERPUNK",
          date_of_birth: "1991-11-30",
          profileImage: "https://example.com/images/sophia_mitchell.jpg",
        },
        {
          id: uuidv4(),
          name: "Zainab Al-Mansoori",
          email: "zainab.mansoori@example.com",
          password: await bcrypt.hash("AdventureSaga@2024", 10),
          genre: "ADVENTURE",
          date_of_birth: "1994-10-02",
          profileImage: "https://example.com/images/zainab_mansoori.jpg",
        },
        {
          id: uuidv4(),
          name: "Alyssa Green",
          email: "alyssa.green@example.com",
          password: await bcrypt.hash("RomanticSuspense@2024", 10),
          genre: "ROMANTIC SUSPENSE",
          date_of_birth: "1992-05-14",
          profileImage: "https://example.com/images/alyssa_green.jpg",
        },
        {
          id: uuidv4(),
          name: "Pablo Gonzalez",
          email: "pablo.gonzalez@example.com",
          password: await bcrypt.hash("SpaceOpera@2024", 10),
          genre: "SPACE OPERA",
          date_of_birth: "1983-02-01",
          profileImage: "https://example.com/images/pablo_gonzalez.jpg",
        },
        {
          id: uuidv4(),
          name: "Mariam Khoury",
          email: "mariam.khoury@example.com",
          password: await bcrypt.hash("LiteraryFiction@2024", 10),
          genre: "LITERARY FICTION",
          date_of_birth: "1995-08-25",
          profileImage: "https://example.com/images/mariam_khoury.jpg",
        },
        {
          id: uuidv4(),
          name: "Noah Davies",
          email: "noah.davies@example.com",
          password: await bcrypt.hash("AdventureNovel@2024", 10),
          genre: "ADVENTURE NOVEL",
          date_of_birth: "1987-03-09",
          profileImage: "https://example.com/images/noah_davies.jpg",
        }
      ]);
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
