export function saveReminders(reminders) {

    localStorage.setItem(

        'reminders',

        JSON.stringify(reminders)
    )

}

export function loadReminders() {

    const data = localStorage.getItem(
        'reminders'
    )


    if (!data) {

        return []
    }


    return JSON.parse(data)

}