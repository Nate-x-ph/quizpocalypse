export default {
    state: {
        profile: {
            username: "Nate-x-ph",
            fullName: "Jonathan Beloro",
        },

        items: [
            {
                question: "1.You hear on the radio that an invasion of zombies is coming. What would you do first?",
                choices: {
                    A: "Board up the house and stock up on supplies.",
                    B: "Wait for them to come and blast them full of lead.",
                    C: "Flee to the forest in terror.",
                    D: "Think it's a joke and sit back to watch T.V."
                },
                correct: "A"
            },

            {
                question: "2.Zombies break into your base and are attacking your friends. What do you do?",
                choices: {
                    A: "Sacrifice yourself to save your friends.",
                    B: "Leave them and escape to save yourself.",
                    C: "Kill all the zombies then flee.",
                    D: "Kill the zombies then check your group for bites."
                },
                correct: "D"
            },

            {
                question: "3.Your sister has been bitten. What do you do?",
                choices: {
                    A: "Say your sorry then kill her without hesitation.",
                    B: "Leave her behind.",
                    C: "Stay with her, knowing there has to be a cure.",
                    D: "Hug and kiss her."
                },
                correct: "A"
            },

            {
                question: "4.How big would your group be?",
                choices: {
                    A: "2-4 people. Easier to move around.",
                    B: "4-6 people. More people = more protection.",
                    C: "I travel alone.",
                    D: "Anything that would work out well for me."
                },
                correct: "A"
            },

            {
                question: "5.You've been bitten and are turning to a zombie. What would you do?",
                choices: {
                    A: "Don't tell anyone.",
                    B: "Kll myself.",
                    C: "Tell everyone goodbye then run away.",
                    D: "Wait for the symptoms to take place."
                },
                correct: "B"
            },

            {
                question: "6.True or False? There is a cure to the Zombie Infection.",
                choices: {
                    A: "True",
                    B: "False"
                },
                correct: "A"
            },

            {
                question: "7.You walk into a gun store but can only carry three weapons. What would you choose? (Not Graded)",
                choices: {
                    A: "Nothing, I'm set.",
                    B: "Sniper Rifle",
                    C: "Assault Rifle",
                    D: "AK-47",
                    E: "Magnum.",
                    F: "Anything that would kill."
                },
                correct: "A"
            },

            {
                question: "8.The apocalypse is coming to an end but your whole group has died and now you're surrounded. What would you do?",
                choices: {
                    A: "I would fight to the death",
                    B: "Try my hardest to escape, knowing this ordeal is coming to an end.",
                    C: "Give up and let them eat me.",
                    D: "All of the above"
                },
                correct: "B"
            },

            {
                question: "In case of a zombie outbreak, the city with ______ number of people is the safest. ",
                choices: {
                    A: "Highest",
                    B: "Least",
                    C: "Moderate",
                    D: "None of the above"
                },
                correct: "A"
            },

            {
                question: "10.Suppose that you have survived the Apocalypse but have become unstable. You're walking outside when you notice somone pale and feverish. You know it is coming again. What would you do?",
                choices: {
                    A: "Kill the man right then and there.",
                    B: "Scream then go on a vacation",
                    C: "Do nothing and wait for the zombies.",
                    D: "Kill myself."
                },
                correct: "A"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                    D: "Choice 4"
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
