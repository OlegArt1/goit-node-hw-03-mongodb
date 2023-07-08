const Contact = require("../models/contacts");

async function getContacts(req, res)
{
    try
    {
        const contacts = await Contact.find();

        console.log("\nGet contacts!\n");

        console.log(`Method - ${req.method};`);
        console.log(`Protocol - ${req.protocol};`);
        console.log(`Hostname - ${req.hostname};`);
        console.log(`Url - ${req.url};\n`);

        return res.status(200).json(contacts);
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(404).send({ message: "Contact not found!" });
    }
};
async function getContactById (req, res)
{
    const { id } = req.params;

    try
    {
        const contactId = await Contact.findById(id);

        if (!contactId)
        {
            return res.status(404).send({ message: "Contact not found!" });
        }
        else
        {
            console.log("\n Get contact by id!\n");

            console.log(`Id - ${id};`);
            console.log(`Type - ${typeof id};\n`);
            
            return res.status(200).json(contactId);
        }
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(404).send({ message: "Contact not found!" });
    }
};
async function createContact (req, res)
{
    try
    {
        const contact =
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            favorite: req.body.favorite,
        };
        const newContact = await Contact.create(contact);

        console.log("\nContact added!\n");

        console.log(req.body + "\n");
        
        return res.status(201).send({ message: "Contact added!" });
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(400).send({ message: "Missing required name field!" });
    }
};
async function updateContact (req, res)
{
    try
    {
        const { id } = req.params;

        const newContact =
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        };
        const updatedContact = await Contact.findByIdAndUpdate(id, newContact, { new: true });

        if (!updatedContact)
        {
            console.log("\nContact not found!\n");

            return res.status(404).send({ message: "Contact not found" });
        }
        else
        {
            console.log("\nContact updated!\n");

            console.log(req.body + "\n");

            return res.status(200).send({ message: "Contact updated!" });
        }
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(400).send({ message: "Missing fields!" });
    }
};
async function updateStatusContact (req, res)
{
    try
    {
        const { id } = req.params;

        const newContact =
        {
            favorite: req.body.favorite,
        };
        const updatedContact = await Contact.findByIdAndUpdate(id, newContact, { new: true });

        if (!updatedContact)
        {
            console.log("\nContact not found!\n");

            return res.status(404).send({ message: "Contact not found" });
        }
        else
        {
            console.log("\nContact updated!\n");

            console.log(req.body + "\n");

            return res.status(200).send({ message: "Contact updated!" });
        }
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(400).send({ message: "Missing field favorite!" });
    }
};
async function deleteContact (req, res)
{
    const { id } = req.params;

    try
    {
        const contactId = await Contact.findByIdAndRemove(id);

        if (!contactId)
        {
            console.log("\nContact not found!\n");

            return res.status(404).send({ message: "Contact not found!" });
        }
        else
        {
            console.log("\nContact deleted!\n");

            return res.status(200).send({ message: "Contact deleted!" });
        }
    }
    catch (error)
    {
        console.log(error.message);
        
        return res.status(404).send({ message: "Contact not found!" });
    }
};
module.exports =
{
    getContacts,
    getContactById,
    createContact,
    updateContact,
    updateStatusContact,
    deleteContact
};