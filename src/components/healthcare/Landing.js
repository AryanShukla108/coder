import React from 'react'
import HealthCareLanding from './HealthCareLanding'
import Companies from "../healthcare/Companies"
import HirePage from './HirePage'
import Coder from './Coder'
import Trust from './Trust'
import CodeLanguages from './CodeLanguages'

const Landing = () => {
    return (
        <div>
            <div><HealthCareLanding /></div>
            <div>
                <Companies />
            </div>
            <div>
                <HirePage />
            </div>
            <div>
                <Coder />
            </div>
            <div>
                <Trust />
            </div>
            <div>
                <CodeLanguages />
            </div>
        </div>
    )
}

export default Landing