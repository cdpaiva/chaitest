const people = [];

const getAllPeople = (req, res) => {
  res.status(200).json(people);
};

const getPerson = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);
  if (!person) {
    res.status(404).json({ msg: `Could not find a person with id ${id}` });
    return;
  }
  res.status(200).json(person);
};

const newPerson = (req, res) => {
  const { name, age } = req.body;
  if (!name) {
    res.status(400).json({ error: "Please enter a name." });
    return;
  }
  if (!name || !age || age < 0) {
    res.status(400).json({ msg: "Invalid input" });
    return;
  }
  people.push({ id: people.length + 1, name, age });
  res
    .status(200)
    .json({
      msg: "A person record was added",
      person: { id: people.length + 1, name, age },
      index: people.length,
    });
};

module.exports = { getAllPeople, getPerson, newPerson };
