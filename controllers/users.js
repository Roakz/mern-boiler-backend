


let index = (req, res) => {
    const users = [
        {id: 1, firstName: "John", lastName: "Doe"},
        {id: 2, firstName: "Beverly", lastName: "Hills"},
        {id: 3, firstName: "Meerkat", lastName: "Bob"} 
    ]   
    res.json(users)
}

module.exports = {
    index,
}