import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRequestHeaders } from "../../../hooks";
import { deleteActivity, fetchActivities } from "../../../store/activitySlice"
import { setPage } from "../../../store/tableSlice";
import { NewTable, ActionColumn, CheckColumn, Action } from "../components/table"
import Create from "./create"

function Activity () {
    const dispatch = useDispatch()
    const [columns] = useState(["No.", "Tanggal", "Uraian", "Status"])
    const activities = useSelector((state) => state.activity.data)
    const dataView = useSelector((state) => state.table.dataView)
    const headers = useRequestHeaders()
    
    useEffect(() => {
        dispatch(fetchActivities({ headers }))
    }, [dispatch])

    const deleteItem = (id) => {
        dispatch(deleteActivity({headers, id}))
    }

    const setActivityPage = (page) => {
        dispatch(setPage({page: page, data: activities}))
    }

    return (
        <div>
            <NewTable columns={columns}
                action={ 
                    <Action add="/v1/admin/activity/create" setPage={setActivityPage} />
                }
            >
                {
                    dataView.length > 0 && dataView.map((item, index) => 
                        <tr key={ index } className="border border-gray-300 border-b h-14 whitespace-no-wrap text-sm text-gray-900 dark:text-gray-600 tracking-normal leading-4">
                            <CheckColumn />
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{ item.number }</td>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{ item.tanggal }</td>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{ item.uraian }</td>
                            <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{ item.wfo }</td>
                            <ActionColumn id={ item.id } delete={deleteItem} />
                        </tr>
                    )
                }
            </NewTable>
        </div>
    )
}

export { Activity, Create }