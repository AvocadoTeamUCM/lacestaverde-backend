
const single = (resource) => ({
    id: resource.id,
    name: resource.name,
    description: resource.description,
    User: resource.userId.name,
    address: resource.address    
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}