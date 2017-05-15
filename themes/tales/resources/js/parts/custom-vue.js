import Tale from './Tale';
import TaleForm from './TaleForm';
import VueTinymce from 'vue-tinymce';

Vue.use(VueTinymce);

export default new Vue({
    el: '#TimmyTalesApp',

    data() {
        return {
            tales: [],
            CurrentTale: [],
            TaleForm: [],
            tinyMce: ({
                selector: '#Form_TaleForm_Content',
                editor: '',
                content: '',
                options: ({})
            }),

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
        },
        clearTale() {
            this.CurrentTale = ''; // clear CurrentTale data
        },
        fillTaleForm() {
            //let form = new TaleForm(this.CurrentTale.Title, this.CurrentTale.Content);
            let form = new TaleForm(this.CurrentTale); // Pass Current Tale Object to Form
            form.fillForm();
            this.TaleForm = form;
        },
        onTaleFormSubmit() {
            let form = new TaleForm(this.TaleForm);
            form.UpdateValues();
            form.updateTale(this.TaleForm, (Data => this.CurrentTale.Title = this.TaleForm.Title), (Data => this.CurrentTale.Content = this.TaleForm.Content));
        },
        change() {
            console.log('a tinyMCE  change');
            // We could update the currentTale Content
            this.CurrentTale.Content = this.tinyMce.editor;
            this.TaleForm.Content = this.tinyMce.editor;
        },


    },
    watch: {
        'CurrentTale': function (val, oldVal)
        {
            // console.log('Val' + val.Title);
            // console.log('oldVal' + oldVal);
            // console.log(this.CurrentTale.Title);
        }
    }

})
