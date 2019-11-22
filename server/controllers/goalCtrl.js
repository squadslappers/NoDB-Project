let goals = [
    { progress: 'graduate from devmountain', date: 'sometime in january', problem: "i'm an idiot", id: 1 }
    ,{ progress: "eat an entire block of cheese", date: "today", problem: "i haven't done that yet", id: 2 }
    ,{ progress: "don't die", date: "ever", problem: "i feel like i'm dying", id: 3 }
    // ,{ progress: "get help from a mentor", date: "right now", problem: "idk wtf i'm doing", id: 4 }
];

// I can't comment out the id... How do I give each element an incrementing id?
let id = 5;

module.exports = {
    addNew: (req, res) => {
        console.log(req.body)
        const newGoal = {
            progress: req.body.progress,
            date: req.body.date,
            problem: req.body.problem,
            id: id++
        }
        goals.push(newGoal);
        res.status(200).send(goals);
    },

    getAll: (req, res) => {
        res.status(200).send(goals)
    },

    edit: (req, res) => {
        let {id} = req.params;
        const {newDate} = req.body;
        const index = goals.findIndex(goal => goal.id === +id);

        console.log(newDate)
        if (index === -1) res.status(404).send('you suck!')
        goals[index].date = newDate;
        res.status(200).send(goals)
    },

    delete: (req, res) => {
        const {id} = req.params;
        const index = goals.findIndex(goal => goal.id === +id);
            if (index === -1) res.status(404).send('item not found')

        console.log('deleted')
        goals.splice(index, 1);
        res.status(200).send(goals);
    }
}