db.Restaurants.find(
    {$or: [{"name": /Thai/}, {"address.street": /Street/},
           {"address.zipcode": {$eq: "17988"}}]}
)