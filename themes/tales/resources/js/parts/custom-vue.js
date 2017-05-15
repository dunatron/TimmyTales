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
            //TaleForm: [],
            TaleForm: new TaleForm({
                ID: '',
                Title: '',
                Content: ''
            }),
            tinyMce: ({
                //selector: '#Form_TaleForm_Content',
                min_height: 800,
                editor: '',
                content: '',
                options: ({
                    min_height: 400,
                    selector:'textarea#Form_TaleForm_Content',
                    plugins: [
                        'autolink lists link preview anchor',
                        'fullscreen',
                        'table contextmenu'
                    ],
                    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent spellchecker',
                    table_toolbar: "tableprops cellprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"

                })
            })

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
        clearTaleForm(){
            console.log('what a clear');
            this.TaleForm.resetForm();
            // this.tinyMce.editor = '';
            // this.tinyMce.content = '';
            this.TaleForm.clearTinyMCE();
        },
        fillTaleForm() {
            //let form = new TaleForm(this.CurrentTale.Title, this.CurrentTale.Content);
            //let form = new TaleForm(this.CurrentTale); // Pass Current Tale Object to Form
            //form.fillForm();
            this.TaleForm.updateData(this.CurrentTale);
            this.TaleForm.fillForm();
            //this.TaleForm = form;
        },
        onTaleFormSubmit() {
            // let form = new TaleForm(this.TaleForm);
            // form.UpdateValues();
            //TaleForm.updateTale(this.TaleForm, (Data => this.CurrentTale.Title = this.TaleForm.Title), (Data => this.CurrentTale.Content = this.TaleForm.Content));
            //form.updateTale(this.TaleForm, (Data => this.CurrentTale.Title = this.TaleForm.Title), (Data => this.CurrentTale.Content = this.TaleForm.Content));
            this.TaleForm.updateTale('post', 'pagefunction/processTaleForm');
        },
        onSuccess(response){
            alert(response.data.message)
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
    },
    mounted(){
        $(this.$refs.vuemodal).on("hidden.bs.modal", this.clearTaleForm)
    }

})
