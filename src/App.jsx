import { useEffect, useState } from 'react'

import './App.css'

import ReminderInput from './components/ReminderInput'
import ReminderList from './components/ReminderList'

import { getCurrentTime } from './utils/time'

import {
  requestNotificationPermission,
  showNotification
} from './utils/notifications'

import {
  saveReminders,
  loadReminders
} from './utils/storage'

function App() {

  const [reminders, setReminders] = useState(

      loadReminders()
  )

  const [text, setText] = useState('')

  const [time, setTime] = useState('')

  const [search, setSearch] = useState('')



  useEffect(() => {

    requestNotificationPermission()

  }, [])



  useEffect(() => {

    saveReminders(reminders)

  }, [reminders])



  function addReminder() {

    if (!text || !time) return


    const newReminder = {

      id: Date.now(),

      text: text,

      time: time,

      lastNotification: null
    }


    setReminders(prev => [

      ...prev,

      newReminder

    ])


    setText('')
    setTime('')
  }



  function deleteReminder(id) {

    setReminders(prev =>

        prev.filter(reminder =>

            reminder.id !== id
        )
    )
  }



  const filteredReminders = reminders.filter(

      reminder =>

          reminder.text
              .toLowerCase()
              .includes(
                  search.toLowerCase()
              )
  )



  useEffect(() => {

    const interval = setInterval(() => {

      const currentTime =
          getCurrentTime()


      setReminders(prev =>

          prev.map(reminder => {

            if (
                reminder.time === currentTime
            ) {

              const now = Date.now()


              if (
                  reminder.lastNotification &&
                  now - reminder.lastNotification < 60000
              ) {

                return reminder
              }


              showNotification(
                  reminder.text
              )


              return {

                ...reminder,

                lastNotification: now
              }
            }

            return reminder
          })
      )

    }, 1000)


    return () => clearInterval(interval)

  }, [])



  return (

      <div className="app">

        <h1 className="title">
          Reminder
        </h1>


        <input

            className="search-input"

            type="text"

            placeholder="Search reminders..."

            value={search}

            onChange={(e) =>

                setSearch(e.target.value)
            }
        />


        <ReminderInput

            text={text}
            setText={setText}

            time={time}
            setTime={setTime}

            addReminder={addReminder}

        />


        <ReminderList

            reminders={filteredReminders}

            deleteReminder={deleteReminder}

        />

      </div>
  )

}

export default App