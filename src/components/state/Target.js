import React from 'react'
import {makeTargetStyle} from '../../js/styles.js'
import {defaultParams} from "../../js/params";
import first from './1.png'
import second from './2.png'
import third from './3.png'
import fourth from './4.png'

class Target extends React.Component {

    tooLate = setTimeout(
        () => {
            this.setState({fired: true})
            this.props.targetFired()
        },
        defaultParams.periodForClickMsec
    )

    clearTimeout = () => {
        clearTimeout(this.tooLate)
        return true;
    }

    constructor(props) {
        super(props)
        this.state = {fired: false}
        this.arrayOfCats = [first, second, third, fourth]
    }

    render() {
        return (
            <img 
                src={this.arrayOfCats[Math.floor(Math.random() * 4)]}
                onClick={
                    () => {
                        !this.state.fired
                        && this.clearTimeout()
                        && this.props.clickHandler(this.props.id)
                    }
                }
                style={ makeTargetStyle({...this.props.coordinate, fired: this.state.fired}) 
                }
            />
        )
    }
}

export default Target