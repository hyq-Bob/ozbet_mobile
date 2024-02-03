import Vue from 'vue'
import {
  Button as vanButton,
  Field as vanField,
  Form as vanForm,
  Checkbox as vanCheckbox,
  Popup as vanPopup,
  Icon as vanIcon,
  Switch as vanSwitch,
  DropdownMenu as vanDropdownMenu,
  DropdownItem as vanDropdownItem,
  Progress as vanProgress,
  Swipe as vanSwipe,
  SwipeItem as vanSwipeItem,
  Tab as vanTab,
  Tabs as vanTabs,
  Collapse as vanCollapse,
  CollapseItem as vanCollapseItem
} from 'vant'
let componentsNameList = [
  vanButton,
  vanField,
  vanForm,
  vanCheckbox,
  vanPopup,
  vanIcon,
  vanSwitch,
  vanDropdownMenu,
  vanDropdownItem,
  vanProgress,
  vanSwipe,
  vanSwipeItem,
  vanTab,
  vanTabs,
  vanCollapse,
  vanCollapseItem
]
for (let index = 0; index < componentsNameList.length; index++) {
  Vue.use(componentsNameList[index])
}
