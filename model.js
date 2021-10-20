//model

const model = {
 // tilstand app
  app: {
      currentPage: 'overview',
      // 'logIn', 'overview', 'addQuestion', 'results', 'linkPage', 'poll', 'finishPage'
      currentUser: 'admin',
      // 'admin', 'guest'(anonym), 'bruker'
  },

//inputfelter til hver side
    inputs: {
        logIn: {
            username: '',
            password: '',
        },
  
        questionInput: [
            {
                title: "", 
                questions: [
                    {
                        question: "", 
                        answers: [],
                        isChecked: false,
                    },
                ],
            },
        ],

        poll: {
            questions: [
                {
                    question: {
                        radioInput: false,
                        textInput: '',
                    },
                },
            ],
        },
    },

//data
    users: [
        {name: 'admin', pwd: '123', access: 1,},
        {name: 'guest', pwd: '', access: 2,},
        {name: 'user1', pwd: '123', access: 2,},
    ],

    polls: [
        { id: 1, 
            tittel: '', 
            spm: [
                    {spørsmålstekst: '', 
                    svarAlternativer: ['', '', '',]
                    }
            ],
        },
    ],

};


