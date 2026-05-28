function ReminderCard({

                          reminder,
                          deleteReminder

                      }) {

    return (

        <div className="reminder-card">

            <div className="reminder-info">

                <div className="reminder-text">

                    {reminder.text}

                </div>


                <div className="reminder-time">

                    {reminder.time}

                </div>

            </div>


            <button

                className="delete-button"

                onClick={() =>

                    deleteReminder(reminder.id)
                }

            >
                ✕

            </button>

        </div>
    )

}

export default ReminderCard