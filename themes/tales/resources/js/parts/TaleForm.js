class TaleForm {

    // constructor(Title, Content)
    // {
    //     this.Title = Title;
    //     this.Content = Content;
    // }
    constructor(form)
    {
        this.ID = form.ID;
        this.Title = form.Title;
        this.Content = form.Content;
    }


    getFormData()
    {
        console.log(this.Title);
        console.log(this.Content);
    }

    fillForm()
    {
        this.tnyMCEInit();
        let FormTitle = $('#Form_TaleForm_Title');

        FormTitle.val(this.Title);
        tinymce.get("Form_TaleForm_Content").execCommand('mceInsertContent', false, this.Content);
    }

    updateTale(taleForm, then){
        axios.post('pagefunction/processTaleForm', {
            tale: taleForm
        })
            .then(({data}) => then(data))
    }

    UpdateValues()
    {
        this.Title = $('#Form_TaleForm_Title').val();
        this.Content = $('#Form_TaleForm_Content_ifr')[0].contentDocument.body.innerHTML;

        console.log(this.Content);
    }


    tnyMCEInit()
    {
        tinymce.init({
            selector:'textarea#Form_TaleForm_Content',
            plugins: "codesample",
            codesample_languages: [
                {text: 'HTML/XML', value: 'markup'},
                {text: 'JavaScript', value: 'javascript'},
                {text: 'CSS', value: 'css'},
                {text: 'PHP', value: 'php'},
                {text: 'Ruby', value: 'ruby'},
                {text: 'Python', value: 'python'},
                {text: 'Java', value: 'java'},
                {text: 'C', value: 'c'},
                {text: 'C#', value: 'csharp'},
                {text: 'C++', value: 'cpp'}
            ],
            toolbar: "codesample"
        });
    }

}

export default TaleForm;

