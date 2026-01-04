import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(state);

    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha
                onChange={(color) => state.color = color.hex}
                presetColors={[
                    { label: "Red", color: "#FF0000" },
                    { label: "Green", color: "#00FF00" },
                    { label: "Blue", color: "#0000FF" },
                    { label: "Yellow", color: "#FFFF00" },
                    { label: "Cyan", color: "#00FFFF" },
                    { label: "Magenta", color: "#FF00FF" },
                    { label: "Black", color: "#000000" },
                    { label: "White", color: "#FFFFFF" },
                    { label: "Grey", color: "#808080" },
                    { label: "Orange", color: "#FFA500" },
                    { label: "Purple", color: "#800080" },
                    { label: "Pink", color: "#FFC0CB" },
                ]}
            />
        </div>
    )
}

export default ColorPicker