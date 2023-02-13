import {defaultParams} from './params'

export const gameField = {
    width: defaultParams.fieldWidth + 'px',
    height: defaultParams.fieldHeight + 'px',
    cursor: 'crosshair',
    position: 'relative',
}

export const panelStyle = {
    height:"39px",
    textAlign: 'center',
    fontSize: '30px',
    color: '#000',
    paddingTop: '40px',
    paddingBottom: '30px',
    marginTop: '60px',
}

export const messageStyle = {
    textAlign: 'center',
    fontSize: '40px',
    paddingTop: '165px',
}

export const makeTargetStyle = ({xpos, ypos, fired}) => {
    return {
        width: defaultParams.targetWidth,
        height: defaultParams.targetHeight,
        boxShadow: fired ? defaultParams.targetShadow2 : defaultParams.targetShadow1,
        borderRadius: defaultParams.targetBorderRadius1,
        position: 'absolute',
        top: ypos,
        left: xpos,
    }
}