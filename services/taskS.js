const base_url = 'http://localhost:3000/api/'

export function getTasksByDate(token, crit1, crit2) {
    console.log(token, crit1, crit2)
    return  (
        fetch(base_url + 'task/date', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({start: crit1, end: crit2})
            }
        ))}

export function createTask(token, task) {
    console.log(token, task)
    return (
        fetch(base_url + 'task/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({title: task})
        })
    )
}


