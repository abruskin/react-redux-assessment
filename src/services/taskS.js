const base_url = 'http://localhost:3000/api/'



export function getTasksByDate(crit1, crit2, token) {
    console.log('here')
    return  () => {
        fetch(base_url + 'task/date', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
        body: JSON.stringify({start: crit1, end: crit2})
        }).then(json => json.json(), (error) => {console.log(error)})
            .then(json => {
                console.log(json)
                },
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