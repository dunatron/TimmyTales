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

    updateData(formData){
        for (let field in formData){
            this[field] = formData[field];
        }
    }

    fillForm()
    {
        let FormID = $('#Form_TaleForm_ID');
        let FormTitle = $('#Form_TaleForm_Title');

        if(this.Title){
            FormTitle.val(this.Title);
        }
        if(this.Content){
            FormID.val(this.ID);
        }
        if(this.Content){
            tinymce.get("Form_TaleForm_Content").execCommand('mceInsertContent', false, this.Content);
        }
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
    
    clearTinyMCE()
    {
        $('#Form_TaleForm_Content_ifr')[0].contentDocument.body.innerHTML = '';
    }

    UpdateValues()
    {
        this.Title = $('#Form_TaleForm_Title').val();
        this.Content = $('#Form_TaleForm_Content_ifr')[0].contentDocument.body.innerHTML;

        console.log(this.Content);
    }

    resetForm()
    {
        for (let field in this.originalData)
        {
            console.log('RESET' + this[field]);
            this[field] = '';
            console.log('RESET' + this[field]);
        }
    }

    onSuccess(response) {
        alert(response.data.message);
    }

    onFail(error) {
        console.log(error.response.data);
    }

}

export default TaleForm;

