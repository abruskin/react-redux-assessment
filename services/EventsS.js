const base_url = 'http://localhost:3000/api/'



export function getEventsByDate(token, crit1, crit2) {
    console.log(token, crit1, crit2)
    return  (
        fetch(base_url + 'events/date', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({start: crit1, end: crit2})
            }
        ))}


// export function createTask() {
//     return fetch(base_url + 'task/', {
//         method: 'PUT',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(content)
//     })
// }