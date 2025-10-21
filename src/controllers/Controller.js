class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const register = await this.serviceEntity.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async getOne(req, res) {
    const { ...params } = req.params;
    try {
      const register = await this.serviceEntity.getOneRegister(params);
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async createNew(req, res) {
    const registerData = req.body;
    try {
      const newRegister = await this.serviceEntity.createNewRegister(registerData);
      return res.status(200).json({
        message: 'Register created successfully.', 
        register: newRegister
      });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegister(updatedData, Number(id));
      if (!isUpdated) {
        return res.status(400).json({
          message: 'Register was not updated'
        });
      }
      return res.status(200).json({
        message: 'Updated successfully'
      });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.serviceEntity.deleteRegister(Number(id));
      return res.status(200).json({
        message: `Id ${id} deleted successfully.`
      });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = Controller;