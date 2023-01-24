import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CommonService {

    public getFormulaText(formulas, type = '') {
        let formulaText = '', rectText = '';
        if (formulas && Array.isArray(formulas) && formulas.length) {
            formulas.map((formulaList: any) => {
                rectText = formulaList.operand + ' ' + (formulaList.operator || '') + (formulaList.value || '');
                if (!formulaList.logic) formulaText += rectText;
                formulaText += (formulaList.logic || '');
                if (formulaList.formula && formulaList.formula.length) {
                    formulaText += this.getConditionText(formulaList.formula);
                    formulaText += ")";
                }
                if (formulaList.logic) formulaText += ' then ' + rectText;
            });
        }
        return formulaText;
    }

    getConditionText(conditions: any) {
        let conditionText = '';
        conditions.map((condition: any, index: any) => {
            conditionText += (condition.operator2 || '');
            if (!index) {
                conditionText += '(';
            }
            conditionText += (condition.condition || '') + (condition.operand1 || '') + (condition.operator1 || '');
            conditionText += (condition.operand2 || '') + (condition.value || '');
            if (condition.group && condition.group.length) {
                conditionText += this.getConditionText(condition.group);
                conditionText += ')';
            }
        });
        return conditionText;
    }

    getKeys(object: any) {
        return Object.keys(object);
    }
}
