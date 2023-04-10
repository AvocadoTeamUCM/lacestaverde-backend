
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

const nutritionDto = (resource) =>({
    cantidad: resource.serving_size_g + 'g',
    calorias: resource.calories + ' g',
    grasa_total: resource.fat_total_g + ' g',
    grasa_saturada: resource.fat_saturated_g + ' g',
    proteina: resource.protein_g + ' g',
    sodio: resource.sodium_mg + ' mg',
    potasio: resource.potassium_mg + ' mg',
    colesterol: resource.cholesterol_mg + ' mg',
    carbohidratos_total: resource.carbohydrates_total_g + ' g',
    fibras: resource.fiber_g + ' g',
    azucar: resource.sugar_g + ' g'
})

module.exports = {
    single,
    multiple,
    nutritionDto
}