function ReminderInput({

                           text,
                           setText,

                           time,
                           setTime,

                           addReminder

                       }) {

    return (

        <div className="input-container">

            <input

                type="text"

                placeholder="Reminder..."

                value={text}

                onChange={(e) =>

                    setText(e.target.value)
                }
            />


            <input

                type="time"

                value={time}

                onChange={(e) =>

                    setTime(e.target.value)
                }
            />


            <button onClick={addReminder}>

                Add

            </button>

        </div>
    )

}

export default ReminderInput