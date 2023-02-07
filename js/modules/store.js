import arvic from './modules/arvic.js';

import jonathan from './modules/jonathan.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        jonathan
    }
});

export default store;