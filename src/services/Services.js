const dataSource = require('../database/models');

class Services {
  constructor(nameModel) {
    this.model = nameModel;
  }

  async getAllRegisters(where = {}) {
    return dataSource[this.model].findAll({where: { ...where }});
  }

  async getRegistersByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async getOneRegister(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async createNewRegister(registerData) {
    return dataSource[this.model].create(registerData);
  }

  async updateRegister(updatedData, where) {
    const updatedRegisterList = dataSource[this.model].update(
      updatedData,
      {where: { ...where }}
    );
    if (updatedRegisterList[0] === 0) false;
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({where: {id: id}});
  }
}

module.exports = Services;