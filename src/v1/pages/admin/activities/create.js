import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Label, Textarea, Toggle, ErrorMessage, FunctionButtton } from '../components/Form'
import { addActivity, resetCreateForm, setCreateForm } from "../../../store/activitySlice";
import { useEffect } from "react";
import { removeFormError, resetFormError } from "../../../store/mainSlice";
import { useRequestBody, useRequestHeaders } from "../../../hooks";

const Create = () => {
    const navigate = useNavigate()

    const form = useSelector((state) => state.activity.createForm)
    const formError = useSelector((state) => state.main.formError)
    const created = useSelector((state) => state.activity.created)
    const headers = useRequestHeaders()
    const formdata = useRequestBody(form)
    const dispatch = useDispatch();

    /**
     * 
     * @param {string} field 
     * @param {string} value 
     */
    const inputForm = (event, value = '') => {
        const name = event.target.name
        if (event.target.type === 'file') {
            value = []
            form.files.forEach(function (file){
                value.push(file)
            })
            let index = 0
            while (index < event.target.files.length) {
                var file = event.target.files[index]
                value.push(file)
                index += 1
            }
        }
        dispatch(setCreateForm({ field: name, value: value }))
        dispatch(removeFormError({ field: name }))
    }

    /**
     * 
     * @param {*} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addActivity({headers, formdata}))
    };

    useEffect(() => {
        return () => {
            dispatch(resetCreateForm())
            dispatch(resetFormError())
        }
    }, [dispatch])
    
    useEffect(() => {
        if (created) navigate('/v1/admin/activity')
    }, [created, navigate])
    
    return (
        <form id="createActivity" onSubmit={ (e) => handleSubmit(e) }>
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Detil Aktivitas</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-1">
                        <div>
                            <Label for={'wfo'} label={'WFO'} error={ formError.wfo } />
                            <Toggle value={ form.wfo } name={ 'wfo' } onChange={ (e) => inputForm(e, !form.wfo) } error={ formError.wfo } />
                            { formError.wfo && <ErrorMessage message={ formError.wfo.msg } />}
                        </div>
                        <div>
                            <Label for={'uraian'} label={'Uraian'} error={ formError.uraian } />
                            <Input id={'uraian'} error={ formError.uraian } placeholder={ 'Uraian' } name={ 'uraian' } onInput={ (e) => inputForm(e, e.target.value) } />
                            { formError.uraian && <ErrorMessage message={ formError.uraian.msg } /> }
                        </div>
                        <div>
                            <Label for={"keterangan"} label={"Keterangan"} error={false} />
                            <Textarea id={"keterangan"} placeholder={"Keterangan"} error={ formError.keterangan } name={ 'keterangan' } onInput={ (e) => inputForm(e, e.target.value) } />
                            { formError.keterangan && <ErrorMessage message={ formError.keterangan.msg } /> }
                        </div>
                        <div>
                            <Label for={"files"} label={"File Kegiatan"} error={false} />
                            <input name="files" type="file" accept="image/*" className="mt-3 w-full" onChange={ (e) => inputForm(e) } />
                            { formError.files && <ErrorMessage message={ formError.files.msg } /> }
                            <div className="mt-3">
                                <div className="border-2 border-slate-600 w-40">
                                    <button type="button" className="border-2 rounded-full float-right absolute w-7 h-7 background bg-gray-300">&times;</button>
                                    <img src="/logo512.png" alt="images" className="h-auto w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FunctionButtton />
            </div>
        </form>
    );
};

export default Create;
