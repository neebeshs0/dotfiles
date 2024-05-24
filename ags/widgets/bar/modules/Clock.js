const time = Variable("", {
    poll: [1000, 'date +"%l:%M %p"'],
})

const date = Variable("", {
    poll: [1000, 'date +"%d %b %Y"'],
})

const day = Variable('', {
    poll: [1000, 'date +"%A%n"']
})

const toottipDayDate = Variable('', {
    poll: [1000, 'date +"%A%n%d %b %Y"']
})

function getDateAndTime() {
    return Widget.Box({
        class_name: 'date-time',
        vertical: true,
        children: [
            Widget.Label({
                class_name: 'day',
                label: day.bind(),
            }),
            Widget.Label({
                class_name: 'date',
                label: date.bind(),
            }),
        ]
    })
}

function CalendarContainer() {
    return Widget.Box({
        class_name: 'calendar-container',
        visible: false,
        children: [
            Widget.Box({
                homogeneous: true,
                vertical: true,
                child: getDateAndTime()
            }),
            Widget.Calendar({
                class_name: 'calendar',
                showDayNames: true,
                showDetails: true,
                showHeading: true,
            })
        ]
    })
}

function CalendarRevealer() {
    return Widget.Revealer({
        transition: "slide_down",
        reveal_child: true,
        child: CalendarContainer(),
    }).hook(App, (self, wname, visible) => {
        if (wname === 'calendar')
            self.reveal_child = visible
    }, 'window-toggled')
}

export function CalendarWindow() {
    return Widget.Window({
        name: 'calendar',
        class_name: 'calendar-window',
        css: 'padding: 1px;',
        anchor: ['top', 'left'],
        margins: [12, 12, 0],
        visible: false,
        child: Widget.Box({
            child: CalendarRevealer()
        })
    })
}

export default function Clock() {
    return Widget.Button({
        class_name: 'bar-clock',
        hpack: 'end',
        onClicked: () => App.toggleWindow('calendar'),
        tooltipText: toottipDayDate.bind(),
        child: Widget.Label({
            label: time.bind(),
        })
    })
}