
const single = (resource) => ({
    id: resource._id,
    name: resource.name,
    address: resource.address,
    description: resource.description,
    user: resource.userId.name
})

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}