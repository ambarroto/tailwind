/**
 * @param {Object} form - an object of input requests
 * @return {FormData} formData
 */
export default function useRequestBody (form) {
    let formdata = new FormData()
    for (var key in form) {
        if (key === 'files') {
            for (let file in form[key]) {
                formdata.append('files', form[key][file], form[key][file].name)
            }
        } else {
            formdata.append(key, form[key])
        }
    }

    return formdata
}