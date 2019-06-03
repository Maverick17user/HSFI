import { REPORT_CHECKBOX_HANDLING } from '../types'

export const checkboxAction = target => {
    return {
        type: REPORT_CHECKBOX_HANDLING,
        target
    }
}