export const baseReq = (req, res) => {
    res.status(201).json({ message: 'Inventory API is Running' })
    console.log('Inventory API is Running');
}