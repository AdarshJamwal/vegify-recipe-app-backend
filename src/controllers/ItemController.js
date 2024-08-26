// src/controllers/ItemController.js
const Item = require('../model/ItemModel')

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (err) {
    console.error('Error fetching items:', err); // Log any errors
    res.status(500).json({ message: 'Server Error' });
  }
};


const getSearchedItems = async(req, res)=>{
  const {q} = req.query;
  try {
    let items;
    if(q){
      items = await Item.find({name: {$regex: q, $options: 'i'}})
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({message: "No Items Found !!"})
    
  }
}




const getSingleItem = async(req, res)=>{
  const {id} = req.params;
  try {
    const item = await Item.findById(id);
    res.json(item)
  } catch (error) {
    res.status(500).json({message: 'No Items were Found'})
  }
}


module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem
}; 

























