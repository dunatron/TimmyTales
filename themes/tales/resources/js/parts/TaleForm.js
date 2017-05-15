class TaleForm {

    constructor(formData)
    {
        // this.ID = form.ID;
        // this.Title = form.Title;
        // this.Content = form.Content;

        this.originalData = formData;

        for (let field in formData){
            this[field] = formData[field];
        }
    }

    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        return data;
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

    // updateTale(taleForm, then){
    //     axios.post('pagefunction/processTaleForm', {
    //         tale: taleForm
    //     })
    //         .then(({data}) => then(data))
    //         // .catch(error => {
    //     //     console.log(error.response)
    //     // })
    //         .catch(error => this.errors = error.response.data)
    // }
    updateTale(requestType, url, taleForm, then){
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }

    UpdateValues()
    {
        this.Title = $('#Form_TaleForm_Title').val();
        this.Content = $('#Form_TaleForm_Content_ifr')[0].contentDocument.body.innerHTML;

        console.log(this.Content);
    }

    resetForm()
    {
        for (let field in originalData)
        {
            this[field] = '';
        }
    }

    onSuccess(response) {
        alert(response.data.message);
    }

    onFail(error) {
        console.log(error.response.data);
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

