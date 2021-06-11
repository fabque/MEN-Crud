module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
           title: String,
           description: String,
           published: Boolean
        },
            {timestamps: true}
        );

//If you use this app with a front-end that needs id field instead of _id,
// you have to override toJSON method that map default object to a custom object
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};

/*
{
    "title": "Js Tut#",
    "description": "Description for Tut#",
    "published": true,
    "createdAt": "2020-02-02T02:59:31.198Z",
    "updatedAt": "2020-02-02T02:59:31.198Z",
    "id": "5e363b135036a835ac1a7da8"
}*/
