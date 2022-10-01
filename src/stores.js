import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Mimi has been the best enforcer I have seen! She did an excellent job in telling me to shut up and enforcing the rules in a professional matter. I would definitely recommend the moderation in this server thanks to her!'
    },
    {
        id: 2,
        rating: 9,
        text: 'Big fan of Reuel. He has done a lot for this community, and I am glad to see him on the staff team. On top of the Reddit, their respective Discord server and now FRS, he is unstoppable! One of the best people around.'
    },
    {
        id: 3,
        rating: 8,
        text: 'Yeah I do not know what else to say in a review besides.... penis.'
    },
])