import invModal from "../models/invModal.js";

export const createItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body
        const newItem = await invModal.create({ name, quantity, price })
        res.status(201).json({ message: 'created new item', newItem });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const invItems = async (req, res) => {
    try {
        const items = await invModal.find({})
        res.status(200).json(items);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }

}