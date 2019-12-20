import * as Yup from 'yup';
import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    if (tag) {
      const tools = await Tool.find({
        tags: tag,
      }).sort({ createdAt: 'desc' });

      return res.json(tools);
    }

    const tools = await Tool.find();
    return res.json(tools);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
      tags: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const tool = await Tool.create(req.body);

    return res.status(201).json(tool);
  }

  async delete(req, res) {
    await Tool.findByIdAndDelete(req.params.id);

    return res.status(204).json();
  }
}

export default new ToolController();
