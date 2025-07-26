class CrudRepository {
        constructor(model) {
            this.model = model;
        }

        async create(data) {
            try {
                const result = this.model.create(data);
                return result;
            } catch (error) {
                console.log('something went wrong in repository layer');
                throw(error);
            }
        }

        async destroy(modelId) {
            try {
                const response = this.model.destroy({
                    where: {
                        id: modelId
                    }
                });
                return true;
            } catch (error) {
                console.log('something went wrong in repository layer');
                throw(error);
            }
        }

        async get(modelId) {
            try {
                const result = await this.model.findByPk(modelId);
                return result;
            } catch (error) {
                console.log('something went wrong in repository layer');
                throw(error);
            }
        }

        async getAll() {
            try {
                const response = await this.model.findAll();
                return response;
            } catch (error) {
                console.log('something went wrong in repository layer');
                throw(error);
            }
        }

        async update(modelId, data) {
            try {
                const result = await this.update(data, {
                        where: {
                            id: modelId
                        }
                });
                return result;
            } catch (error) {
                console.log('something went wrong in repository layer');
                throw(error);
            }
        }

}

module.exports = CrudRepository;



