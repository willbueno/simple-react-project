import { useState } from "react"
import Input from "../components/Input"

const Nobreak = props => {

    const [autonomy, setAutonomy] = useState()
    const [power, setPower] = useState()
    const [voltage, setVoltage] = useState()
    const [finalVoltage, setFinalVoltage] = useState()
    const [inverterEfficiency, setInverterEfficiency] = useState()
    // const [eolFactor, setEolFactor] = useState(false)
    const [designFactor, setDesignFactor] = useState()

    return (
        <div>

            <Input
                text='Autonomia'
                type='number'
                value={autonomy}
                onChange={setAutonomy}
            />

            <Input
                text='Potencia'
                type='number'
                value={power}
                onChange={setPower}
            />

            <Input
                text='Tensao do sistema'
                type='number'
                value={voltage}
                onChange={setVoltage}
            />

            <Input
                text='Tensao final'
                type='number'
                value={finalVoltage}
                onChange={setFinalVoltage}
            />

            <Input
                text='Eficiencia do inversor'
                type='number'
                value={inverterEfficiency}
                onChange={setInverterEfficiency}
            />

            <Input
                text='Fator de projeto'
                type='number'
                value={designFactor}
                onChange={setDesignFactor}
            />

            {/* <Input
                text='Fator de fim de vida'
                type='number'
                value={}
                onChange={}
            /> */}

            <Input
                text='Fator de temperatura'
                type='number'
                value={finalVoltage}
                onChange={setFinalVoltage}
            />
        </div>
    )
}

export default Nobreak