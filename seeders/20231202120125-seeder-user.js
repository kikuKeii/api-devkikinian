"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        firstName: "Miftakhuddin",
        lastName: "Falaki",
        email: "kiki@devkikinian.click",
        socialLink: JSON.stringify({
          github: "https://github.com/kikuKeii",
          twitter: "https://twitter.com/kikikeii",
          linkedin: "https://www.linkedin.com/in/miftakhuddin-falaki/",
          instagram: "https://www.instagram.com/kikikeii/",
          facebook: "https://www.facebook.com/kikikeii/",
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
