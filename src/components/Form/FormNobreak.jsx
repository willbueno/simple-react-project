import './Form.css'
import React, { useState } from "react"

import Input from "../input/Input"
import Button from "../button/Button"

const FormNobreak = props => {
    const [autonomy, setAutonomy] = useState('')
    const [power, setPower] = useState('')
    const [voltage, setVoltage] = useState('')
    const [finalVoltage, setFinalVoltage] = useState('')
    const [inverterEfficiency, setInverterEfficiency] = useState('')
    const [designFactor, setDesignFactor] = useState('')

    const confirm = function () {
        console.log('confirm')
        api.get('/users/romulo27')
            .then(res => console.log(res.data))
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

            <Input
                text='4. Tensão final (V)'
                value={finalVoltage}
                onChange={setFinalVoltage}
                tooltip='TODO'
            />

            <Input
                text='5. Eficiência do inversor (%)'
                value={inverterEfficiency}
                onChange={setInverterEfficiency}
                tooltip='TODO'
            />

            <Input
                text='6. Fator de projeto (%)'
                value={designFactor}
                onChange={setDesignFactor}
                tooltip='TODO'
            />

            <div className="Sizing">
                <Button name='Cancelar' type='Cancel' onClick={cancel} />
                <Button name='Calcular' type='Confirm' onClick={confirm} />
            </div>
        </div>
    )
}

export default FormNobreak