import ReminderCard from './ReminderCard'

function ReminderList({

                          reminders,
                          deleteReminder

                      }) {

    return (

        <div className="reminder-list">

            {reminders.map(reminder => (

                <ReminderCard

                    key={reminder.id}

                    reminder={reminder}

                    deleteReminder={deleteReminder}

                />

            ))}

        </div>
    )

}

export default ReminderList