import React, { PureComponent, ReactNode } from 'react'
import { View, Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import * as Svg from 'react-native-svg';
import * as shape from 'd3-shape'
import * as path from 'svg-path-properties'

interface Props {}
interface State {}

const { Path } = Svg
const { width } = Dimensions.get("window");
const height = 64
const tabs = [
    {name: "home"},
    {name: "list"},
    {name: "refresh-cw"},
    {name: "box"},
    {name: "user"}
]

const tabWidth = width / tabs.length
const left = shape.line()
    .x(d => d.x)
    .y(d => d.y)([
        { x:0, y:0 },
        { x: width, y: 0 }
    ])

const tab = shape.line()
    .x(d => d.x)
    .y(d => d.y)
    ([
        { x: width, y:0 },
        { x: width + 5, y: 0 },
        { x: width + 10, y: 10 },
        { x: width + 15, y: height },
        { x: width + tabWidth - 15, y: height },
        { x: width + tabWidth - 10, y: 10 },
        { x: width + tabWidth - 5, y: 0 },
    ])

const right = shape.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
        { x: width + tabWidth, y: 0 },
        { x: width * 2, y: 0 },
        { x: width * 2, y: height },
        { x: 0, y: 0 }
    ])

const d = `${left} ${tab} ${right}`

class NavigationBar extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <React.Fragment>
                 <Svg>
                     <Path {...{ d }} fill="white" />
                 </Svg>
                 <SafeAreaView style={Styles.safeArea} />
             </React.Fragment>
        )
    }
}

export default NavigationBar

const Styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "white"
    }
})