import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const List = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <G stroke="#400101" strokeWidth={1.5}>
      <Path d="M14.755 1h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 0 0-1.881 1.936C1 3.58 1 4.177 1 5.369v14.005c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V5.37c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 0 0-1.881-1.937C16.493 1 15.914 1 14.755 1Z" />
      <Path
        strokeLinecap="round"
        d="M8.5 10H15M5 10h.5M5 6.5h.5m-.5 7h.5m3-7H15m-6.5 7H15"
      />
    </G>
  </Svg>
)
export default List
