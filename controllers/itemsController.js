const { reduceRight } = require("../items")
const Item = require("../models/itemsModels")

//add new item to db
async function addNewItem(req, res) {
try{
const newitem=new Item({
    name:req.body.name,
    costPrice:req.body.costPrice,
    sellPrice: req.body.sellPrice,
    qnty:req.body.qnty
})
await newitem.save()
res.status(201).json(newitem)
}catch(error){
throw new Error("not save")
}
}

//get all items fron db
const getAllItems= async(req, res)=>{
const items= await Item.find()
if (items){
res.json(items)
}
}
//get a single item
const getAnItem= async(req, res)=>{
const items= await Item.findOne({name:req.params.name})
if (item){
res.json(items)
} else {
    throw new error(res.status(404).json("item not found"))
}
}

//delete a single item
async function deleteItem(req, res){
    const item=await Item.findById(req.params._id)
    if (!item){
        throw new Error("item notfound")
    } else {
        const deletedItem=await item.remove()
        res.json(`${deletedItem.name} removed successfully`)
    }
    
}

// update an item
const updateItem=async (req, res)=>{
    const item=await Item.findById(req.params._id)
    if (item){
item.name=req.body.name ? req.body.name:item.name
item.costPrice=req.body.costPrice ? req.body.costPrice:item.costPrice
item.sellPrice=req.body.sellPrice ? req.body.sellPrice:item.sellPrice
item.qnty=req.body.qnty? req.body.qnty:item.qnty
const updatedItem=await item.save()
resjson(`${updatedItems.name} updated successfully`)
res.json("item updated successfully")
    } else {
throw new Error("oops!! something went wrong")
    }
}

module.exports={
    addNewItem, getAllItems, getAnItem, deleteItem, updateItem
}