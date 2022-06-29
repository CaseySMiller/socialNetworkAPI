const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop users
    await User.deleteMany({});

    // Drop existing students
    await Thought.deleteMany({});

    // Create array of users
    const users = [
        {
            username: "bobJenkins",
            email: "bobJenkins@gmail.com",
            thoughts: [],
        },
        {
            username: "caseyMiller",
            email: "caseymiller@gmail.com",
            thoughts: [],
        },
        {
            username: "bMacho",
            email: "bMacho@gmail.com",
            thoughts: [],
        },
    ];

    //create array of thoughts
    const thoughts = [
        {
            thoughtText: 'I am a bobblehead',
            username: "bobJenkins"
        },
        {
            thoughtText: 'Coding is what the cool kids do',
            username: "bobJenkins"
        },
        {
            thoughtText: 'I am a user',
            username: 'caseyMiller'
        },
        {
            thoughtText: 'Welcome to my world',
            username: 'caseyMiller'
        },
        {
            thoughtText: 'I am an instructoBot',
            username: 'bMacho'
        },
        {
            thoughtText: 'You will be instructed. BOOOOWAHAHAHAHAAA!',
            username: 'bMacho'
        }
    ];

    // Add thoughts to the collection
    await Thought.collection.insertMany(thoughts);
    // for each thought push id to proper user
    thoughts.forEach((thought) => {
        users.forEach((user) => {
            if (thought.username === user.username) {
                user.thoughts.push(thought._id);
            };
        })
    });

    // Add users to the collection and await the results
    await User.collection.insertMany(users);



  // Log out the seed data to indicate what should appear in the database
    const userTable = [];
    users.forEach((user) => {
        const userRow = {
            username: user.username,
            email: user.email,
            _id: user._id
        };
        userTable.push(userRow);
    });
    console.table(userTable);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
