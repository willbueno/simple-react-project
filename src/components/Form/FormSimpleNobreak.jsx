import './Form.css'
import React, { useState } from "react"

import Input from "../input/Input"
import Button from "../button/Button"

const FormSimpleNobreak = props => {
    const [autonomy, setAutonomy] = useState('')
    const [power, setPower] = useState('')
    const [voltage, setVoltage] = useState('')

    const confirm = function () {
        console.log('confirm')
    }

    const cancel = function () {
        console.log('cancel')
    }

    return (
        <div className='Form'>
            <Input
                text='1. Autonomia (minutos)'
                value={autonomy}
                onChange={setAutonomy}
                tooltip='TODO'
            />

            <Input
                text='2. Potência (W)'
                value={power}
                onChange={setPower}
                tooltip='TODO'
            />

            <Input
                text='3. Tensão do sistema (V)'
                value={voltage}
                onChange={setVoltage}
                tooltip='TODO'
            />

            <div className="Sizing">
                <Button name='Cancelar' type='Cancel' onClick={cancel} />
                <Button name='Calcular' type='Confirm' onClick={confirm} />
            </div>
        </div>
    )
}

export default FormSimpleNobreak