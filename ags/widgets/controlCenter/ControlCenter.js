import UptimeInfo from "./modules/UptimeInfo.js"
import BrightnessSlider from "./modules/BrightnessSlider.js"
import VolumeSlider from "./modules/VolumeSlider.js"
import NetworkButton from "./modules/NetworkButton.js"
import BluetoothButton from "./modules/BluetoothButton.js"
import PowerOptions from "./modules/PowerOptionsButton.js"
import SpotifyPlayer from "./modules/SpotifyPlayer.js"
import SystemInfo from "./modules/SysteimInfo.js"
import EscapeKeybind from "../utils/EscapeKeybind.js"


function Top() {
  return Widget.Box({
    vertical: true,
    hexpand: true,
    children: [
      UptimeInfo(),
      BrightnessSlider(),
      VolumeSlider(),
      Widget.CenterBox({
        hexpand: true,
        vertical: true,
        startWidget: Widget.Box({
          children: [
            Widget.Box({
              vertical: true,
              children: [
                NetworkButton(),
                BluetoothButton(),
              ]
            }),
            Widget.Box({
              children: [
                SystemInfo()

              ]
            })
          ]
        }),
        centerWidget: SpotifyPlayer(),
      }),
    ]
  })
}

function Center() {
  return Widget.Label({
    label: 'No Notifications'
  })
}

function Bottom() {
  return Widget.Box({
    vpack: 'end',
    hexpand: true,
    children: [
      PowerOptions(),
    ]
  })
}

function ControlCenterContainer() {
  return Widget.CenterBox({
    class_name: 'control-center',
    vertical: true,
    vexpand: true,
    startWidget: Top(),
    centerWidget: Center(),
    endWidget: Bottom(),
  })
}


export function ControlCenterWindow() {
  const windowName = 'control-center'
  return Widget.Window({
    name: windowName,
    class_name: 'control-center-window',
    keymode: 'on-demand',
    visible: false,
    css: 'padding: 1px;',
    margins: [8, 8, 0],
    anchor: ['top', 'right'],
    child: ControlCenterContainer(),
    setup: self => EscapeKeybind(self, windowName)
  })
}

export default function ControlCenter() {
  App.addIcons(`${App.configDir}/assets`)
  return Widget.Button({
    class_name: 'control-center-button',
    on_clicked: () => App.toggleWindow('control-center'),
    child: Widget.Icon({
      icon: 'expand_more-symbolic',
      css: 'font-size: 24px;'
    }),
  })
}
