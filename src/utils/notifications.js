
export function requestNotificationPermission() {

    if (!("Notification" in window)) {

        console.log(
            "Notifications are not supported"
        )

        return
    }


    if (Notification.permission !== "granted") {

        Notification.requestPermission()
    }

}

export function showNotification(text) {

    if (Notification.permission === "granted") {

        new Notification("Reminder", {

            body: text
        })


        if (navigator.vibrate) {

            navigator.vibrate([200, 100, 200])
        }


    }

}