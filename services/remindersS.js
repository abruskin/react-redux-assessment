const base_url = 'http://localhost:3000/api/'

export function getRemindersByDate(token, crit1, crit2) {
    console.log(token, crit1, crit2)
    return  (
        fetch(base_url + 'reminder/date', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({start: crit1, end: crit2})
            }
        ))}


export function createReminder(token, newReminder) {
    return  (
        fetch(base_url + 'reminder/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({title: newReminder})
            }
        ))}