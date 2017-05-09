import Tale from './Tale';

export default new Vue({
    el: '#TimmyTalesApp',

    data() {
        return {
            tales: [],
            CurrentTale: []
        }
    },

    created()
    {
        Tale.all(tales => this.tales = tales);
    },

    methods: {

        onTaleClick(id) {
            Tale.find(id, (TaleData => this.CurrentTale = TaleData));
            Tale.find(id, (TaleData => console.log(TaleData)));
        }

    },
    watch: {
        'CurrentTale': function (val, oldVal)
        {
            console.log('Val' + val.Title);
            console.log('oldVal' + oldVal);
            console.log(this.CurrentTale.Title);
        }
    }

})
