function createCrudController(Model) {
    return {
        async create(req, res) {
            try {
                const item = new Model(req.body);
                const saved = await item.save();
                res.status(201).json(saved);
            } catch (err) {
                res.status(400).json({ error: err.message });
            }
        },

        async getAll(req, res) {
            try {
                const items = await Model.find();
                res.status(200).json(items);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        },

        async getOne(req, res) {
            try {
                const item = await Model.findById(req.params.id);
                if (!item) return res.status(404).json({ error: 'Not found' });
                res.status(200).json(item);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        },

        async update(req, res) {
            try {
                const updated = await Model.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!updated) return res.status(404).json({ error: 'Not found' });
                res.status(200).json(updated);
            } catch (err) {
                res.status(400).json({ error: err.message });
            }
        },

        async delete(req, res) {
            try {
                const deleted = await Model.findByIdAndDelete(req.params.id);
                if (!deleted) return res.status(404).json({ error: 'Not found' });
                res.status(200).json({ message: 'Deleted' });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    };
}

module.exports = createCrudController;
