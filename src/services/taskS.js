const base_url = 'http://localhost:3000/api/'

//export function getAllTasks() {
    // return fetch(base_url + 'task/All', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //         'Authorization' : 'Bearer' + token
    //     }
    // })
//}

export function getTasksByDate(crit1, crit2) {
   console.log({start:crit1, end:crit2})
    return (dispatch, getState) => { console.log('here')
        fetch(base_url + 'task/date', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + getState().user.token
            },
        body: JSON.stringify({start: crit1, end: crit2})

            //set start to crit1 and set end to crit2, pass these as one object to body/stringify on line22

        }).then(json => json.json(), (error) => {console.log(error)}).then(json => console.log(json),
            (error) => {console.log(error)})
    }
}
// export function createTask() {
//     return fetch(base_url + 'task/', {
//         method: 'PUT',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(content)
//     })
// }