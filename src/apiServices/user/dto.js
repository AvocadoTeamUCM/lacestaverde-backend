const single = (resource) => ({
    id: resource._id,
    name: resource.name, 
    email: resource.email,
    role: resource.role,
    alta: resource.created_at,
    file: resource.file
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple
}