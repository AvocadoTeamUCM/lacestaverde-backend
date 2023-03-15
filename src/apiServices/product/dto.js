
const single = (resource) => ({
    id: resource.id,
    Name: resource.name,
    Price: resource.price,
    Coin: resource.coin,
    Unit: resource.unit,
    Category: resource.categoryId.name ,   
    Store: resource.businessId.name,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}