import Contact from "../models/Contact.js";

async function createContact(req, res) {
  const contact = req.body;

  try {
    const newContact = await Contact.create(contact);
    return res.status(201).json(newContact);
  } catch (error) {
    console.log("Erro ao criar um contato", error);
    res.status(500).json({ message: "Erro ao criar um contato" });
  }
}

async function listContacts(res) {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    console.log("Erro ao listar contatos!", error);
    res.status(500).json({ message: "Erro ao listar contatos!" });
  }
}

async function deleteContact(req, res) {
    const id = req.params.id;

  try {
    if (!id)return res.status(422).json({ message: "Contato não encontrado!" });

    await Contact.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Contato deletado!" });
  } catch (error) {
    console.log("Erro ao deletar contato!", error);
    res.status(500).json({ message: "Erro ao deletar contato!" });
  }
}

async function updateContact(req, res) {
  const id = req.params.id;
  const contact = req.body;

  try {
    if (!id) return res.status(422).json({ message: "Contato não encontrado!" });

    await Contact.findByIdAndUpdate({ _id: id }, contact);
    return res.status(200).json({ message: "User updated!" });
  } catch (error) {
    console.log("Erro ao atualizar contato!", error);
    res.status(500).json({ message: "Erro ao atualizar contato!" });
  }
}

export { createContact, listContacts, deleteContact, updateContact };
