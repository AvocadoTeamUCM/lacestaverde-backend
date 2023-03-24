
const single = (resource) => ({
    id: resource._id,
    Name: resource.name,
    Price: resource.price,
    Coin: resource.coin,
    Unit: resource.unit,
    CategoryId: resource.categoryId._id ,   
    Category: resource.categoryId.name ,   
    StoreId: resource.businessId._id,
    Store: resource.businessId.name
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}