class Tale {

    static find(taleID, then) {
        return axios.post('pagefunction/TaleByID', {
            taleID: taleID
        })
            .then(({data}) => then(data))
    }

    static all(then) {
        return axios.get('pagefunction/allTales')
            .then(({data}) => then(data));
    }
}

export default Tale;